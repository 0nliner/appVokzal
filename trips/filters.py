import django_filters as filters

from .models import Trip


# TODO: тут какая-то хуета с полями
class TripsFilter(filters.FilterSet):
    ordered_breakpoint_titles = filters.CharFilter(field_name="ordered_breakpoint_titles",
                                                   lookup_expr="contains")

    arrive_from = filters.CharFilter(field_name="arrive_from",
                                     lookup_expr="ordered_breakpoint_titles__contains")

    arrive_to = filters.CharFilter(field_name="arrive_to",
                                   lookup_expr="ordered_breakpoint_titles__contains")

    class Meta:
        model = Trip
        fields = ["id"]


