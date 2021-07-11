from django.db.models import Q, F
from rest_framework.response import Response

from .models import Trip

from rest_framework.viewsets import GenericViewSet
from rest_framework import mixins, status
from rest_framework import permissions
from rest_framework.decorators import action

from .filters import TripsFilter
from .serializers import TripSerializer


class TripsViewSet(GenericViewSet):

    permission_classes = [permissions.IsAuthenticated]
    pagination_class = None
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    # filterset_class = TripsFilter

    @action(methods=["GET"], detail=False)
    def trips(self, request):
        # TODO: тут надо добавить валидацию
        params = request.query_params
        trips_list = []

        if "arrive_from" in list(params.keys()) and "arrive_to" in list(params.keys()):
            arrive_from_value = params["arrive_from"]
            arrive_to_value = params["arrive_to"]

            # TODO: добавить поездке статус завершена/не завершена
            # тут мы берём все поездки, подходящие под параметр "откуда -> куда",
            # включая промежуточные остановки

            trips = Trip.objects.all()
            for trip in trips:
                only_titles = [unit[0] for unit in trip.ordered_breakpoint_titles]
                condition_1 = arrive_from_value in only_titles
                condition_2 = arrive_to_value in only_titles

                # сравниваем, arrive_from раньше, чем arrive_to по маршруту
                condition_3 = list(
                    filter(lambda ordered_breakpoint: ordered_breakpoint[0] == arrive_from_value,
                                          trip.ordered_breakpoint_titles))[0][1] < list(
                    filter(lambda ordered_breakpoint: ordered_breakpoint[0] == arrive_to_value,
                            trip.ordered_breakpoint_titles))[0][1]

                if all([condition_1, condition_2, condition_3]):
                    trips_list.append(trip)

            return Response(data=self.__class__.serializer_class(trips_list, many=True).data, status=status.HTTP_200_OK)

        else:
            return Response(data="you need to provide arrive_from and arrive_to arguments",
                            status=status.HTTP_400_BAD_REQUEST)







