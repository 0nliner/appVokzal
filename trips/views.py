import datetime

import pytz
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from cars.views import CarViewSet
from reservations.models import Reservation, Places
from .models import Trip, Breakpoint, LockedPlace

from rest_framework.viewsets import GenericViewSet
from rest_framework import status
from rest_framework import permissions
from rest_framework.decorators import action

from .serializers import TripSerializer, CreationTripSerializer
from cars.models import Car, User


class TripsViewSet(GenericViewSet):
    permission_classes = [permissions.IsAuthenticated]
    # pagination_class = None
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

    @action(methods=["GET"], detail=False)
    def trips(self, request):
        # TODO: тут надо добавить валидацию
        # TODO: добавить обработку сценариев: выдача всех поездок, поездок по данным пунктам не существует
        # TODO: продумать работу с временными поясами
        params = request.query_params
        trips_list = []

        if "arrive_from" in list(params.keys()) \
                and \
                "arrive_to" in list(params.keys()) \
                and \
                "places_quantity" in list(params.keys()):

            arrive_from_value = params["arrive_from"]
            arrive_to_value = params["arrive_to"]
            places_quantity = params["places_quantity"]

            year = params["year"]
            month = params["month"]
            day = params["day"]
            hour = params["hour"]
            minute = params["minute"]

            finding_datetime = datetime.datetime(year=int(year),
                                                 month=int(month),
                                                 day=int(day),
                                                 hour=int(hour),
                                                 minute=int(minute),
                                                 second=0,
                                                 microsecond=0,
                                                 tzinfo=pytz.UTC)

            # TODO: добавить поездке статус завершена/не завершена
            # тут мы берём все поездки, подходящие под параметр "откуда -> куда",
            # включая промежуточные остановки

            trips = Trip.objects.all()
            for trip in trips:
                only_titles = [unit[0] for unit in trip.ordered_breakpoint_titles]
                condition_1 = arrive_from_value in only_titles
                condition_2 = arrive_to_value in only_titles

                # сравниваем, arrive_from раньше, чем arrive_to по маршруту ?
                condition_3 = list(
                    filter(lambda ordered_breakpoint: ordered_breakpoint[0] == arrive_from_value,
                           trip.ordered_breakpoint_titles))[0][1] < list(
                    filter(lambda ordered_breakpoint: ordered_breakpoint[0] == arrive_to_value,
                           trip.ordered_breakpoint_titles))[0][1]

                # проверка на кол-во свободных мест
                condition_4 = int(places_quantity) <= \
                              trip.car.num_places - sum(
                    reservation.places_quantity for reservation in trip.reservations.all())

                # добавить проверку на непросроченность поездки по времени
                condition_5 = trip.datetime >= finding_datetime

                # если поездка не завершена
                condition_6 = not trip.is_completed

                if all([condition_1, condition_2, condition_3, condition_4, condition_5, condition_6]):
                    trips_list.append(trip)

            return Response(data=self.__class__.serializer_class(trips_list, many=True).data, status=status.HTTP_200_OK)

        else:
            return Response(data="you need to provide arrive_from and arrive_to arguments",
                            status=status.HTTP_400_BAD_REQUEST)

    @action(methods=["POST"], detail=False)
    def create_trip(self, request):
        serialized_trip_data = CreationTripSerializer(data=request.data)
        serialized_trip_data.is_valid(raise_exception=True)

        car = get_object_or_404(Car,owner=request.user, id=serialized_trip_data.data["car_id"])
        driver = get_object_or_404(User, id=request.user.id)

        unparsed_date = [int(unit) for unit in request.data["trip_date"].split("-")]
        unparsed_time = [int(unit) for unit in request.data["trip_time"].split(":")]

        trip_datetime = datetime.datetime(
            year=unparsed_date[0],
            month=unparsed_date[1],
            day=unparsed_date[2],
            hour=unparsed_time[0],
            minute=unparsed_time[1]
        )

        trip = Trip(car=car,
                    driver=driver,
                    datetime=trip_datetime,
                    )

        # создаём breakpoint'ы
        breakpoints_1 = []
        for breakpoint_data_raw in serialized_trip_data.data["breakpoints_1"]:
            breakpoint_data_dict: dict = dict(breakpoint_data_raw)
            breakpoint_obj = Breakpoint(
                                    trip=trip,
                                    title=breakpoint_data_dict["title"],
                                    order_index=breakpoint_data_dict["index"],
                                    is_back_trip=False,
                                    msg=breakpoint_data_dict["msg"],
                                    price=breakpoint_data_dict["price_per_place"]
            )

            breakpoints_1.append(breakpoint_obj)

        # создаём breakpoint'ы на обратную дорогу
        breakpoints_2 = []
        for breakpoint_data_raw in serialized_trip_data.data["breakpoints_2"]:
            breakpoint_data_dict: dict = dict(breakpoint_data_raw)
            breakpoint_obj = Breakpoint(
                                    trip=trip,
                                    title=breakpoint_data_dict["title"],
                                    order_index=breakpoint_data_dict["index"],
                                    is_back_trip=True,
                                    msg=breakpoint_data_dict["msg"],
                                    price=breakpoint_data_dict["price_per_place"]
            )

            breakpoints_2.append(breakpoint_obj)

        # создаём недоступные места
        locked_places = []
        for locked_place_index in serialized_trip_data.data["locked_places"]:
            locked_place_obj = LockedPlace(trip=trip,
                                           place_index=locked_place_index
                                           )

            locked_places.append(locked_place_obj)

        # создаём занятые места

        # TODO: заказчику может не понравиться вариант с отсутствием выбора пункта остановок для резервирования
        #  с его стороны, он не продумал этот момент
        driver_reservation = Reservation(user=driver,
                                            trip=trip,
                                            arrive_from=breakpoints_1[0],
                                            arrive_to=breakpoints_1[-1],
                                            datetime=trip.datetime
                                         )

        driver_places = []
        for place_index in serialized_trip_data.data["reserved_places"]:
            place = Places(place_index=place_index,
                           reservation=driver_reservation)

            # driver_reservation.places.add(place)
            driver_places.append(place)

        # пояснялка: объекты сохраняем в конце, чтобы при наличии багов части данных не сохранялись
        # TODO: сохраняем объект trip и добавляем + сохраняем связанные объекты

        # TODO: отрефакторить
        trip.save()

        [breakpoint_obj.save() for breakpoint_obj in [*breakpoints_1, *breakpoints_2]]
        [trip.breakpoints.add(breakpoint_obj) for breakpoint_obj in [*breakpoints_1, *breakpoints_2]]

        driver_reservation.save()
        trip.reservations.add(driver_reservation)
        [driver_place.save() for driver_place in driver_places]

        [locked_place_obj.save() for locked_place_obj in locked_places]
        [trip.locked_places.add(locked_place_obj) for locked_place_obj in locked_places]

        return Response(data=TripSerializer(trip).data, status=status.HTTP_201_CREATED)