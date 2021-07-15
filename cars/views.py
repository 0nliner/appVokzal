import shutil
import datetime

from django.shortcuts import render, get_object_or_404
from django.conf import settings

from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework import mixins, status
from rest_framework import permissions
from rest_framework.decorators import action

from .models import Car, CarImages
from .serializers import CarSerializer, CarImageSerializer


class CarViewSet(GenericViewSet,
                 mixins.ListModelMixin,
                 mixins.RetrieveModelMixin,
                 # mixins.CreateModelMixin,
                 mixins.DestroyModelMixin):

    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return super().get_queryset().filter(owner=self.request.user)

    @action(methods=["POST"], detail=False)
    def create_car(self, request, *args, **kwargs):
        car_serialized = CarSerializer(data=request.data)
        print(car_serialized)
        car_serialized.is_valid(raise_exception=True)

        data_copy = car_serialized.data
        data_copy.pop("car_images")
        data_copy.pop("owner")

        car_object = Car(owner=self.request.user, **data_copy)
        car_object.save()
        return Response(data=CarSerializer(car_object).data, status=status.HTTP_201_CREATED)

    @action(methods=["POST"], detail=False)
    def add_image(self, request):
        data = request.data
        # TODO: добавить валидацию файла

        new_file = request.data["img"].file
        file_extension = request.data["img"].content_type.split("/")[1]
        file_name = f"{datetime.datetime.utcnow()}.{file_extension}"

        with open(str(settings.BASE_DIR / "static/images/cars/" / file_name),
                  mode="wb+") as f:
            shutil.copyfileobj(new_file, f)

        car_obj = get_object_or_404(self.get_queryset(), id=int(data["car_id"]))
        car_obj.car_images.create(img=f"static/{file_name}")

        # TODO: переписать ответ сервера, сделать через сериализатор
        return Response(data={"car_id": car_obj.id, "img": f"static/{file_name}"}, status=status.HTTP_201_CREATED)

    # TODO: написать апишку под изменение автомобилей и удаление фотографий

