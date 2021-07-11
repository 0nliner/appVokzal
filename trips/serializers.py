from rest_framework.serializers import ModelSerializer
from .models import Trip


class TripSerializer(ModelSerializer):
    class Meta:
        model = Trip
        fields = ["id", "ordered_breakpoint_titles", "arrive_from", "arrive_to"]
