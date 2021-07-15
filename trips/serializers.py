from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import Trip


class TripSerializer(ModelSerializer):
    # is_completed
    class Meta:
        model = Trip
        fields = ["id", "ordered_breakpoint_titles", "arrive_from", "arrive_to", "is_completed",
                  "driver", "car", "datetime"]


class CreationBreakpointSerializer(serializers.Serializer):
        index = serializers.IntegerField()
        title = serializers.CharField(max_length=200)
        price_per_place = serializers.IntegerField()
        msg = serializers.CharField(max_length=500)


class CreationTripSerializer(serializers.Serializer):
    locked_places = serializers.ListSerializer(
        child=serializers.IntegerField()
    )

    reserved_places = serializers.ListSerializer(
        child=serializers.IntegerField()
    )

    car_id = serializers.IntegerField()
    trip_date = serializers.DateField()
    trip_time = serializers.TimeField()

    breakpoints_1 = CreationBreakpointSerializer(many=True)
    breakpoints_2 = CreationBreakpointSerializer(many=True)


