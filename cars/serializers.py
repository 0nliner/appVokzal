from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from users.serializers import UserSerializer, UserSerializerOnlyId
from .models import Car, CarImages


class CarImageSerializer(ModelSerializer):
    class Meta:
        model = CarImages
        fields = "__all__"


class CarSerializer(ModelSerializer):
    owner = UserSerializerOnlyId(required=False, allow_null=True)
    car_images = CarImageSerializer(required=False, many=True, allow_null=True)
    num_places = serializers.IntegerField()

    class Meta:
        model = Car
        fields = "__all__"
