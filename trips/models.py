from django.db import models

from cars.models import Car
from users.models import User


class Trip(models.Model):
    class Meta:
        verbose_name = "Поездка"
        verbose_name_plural = "Поездки"

    driver = models.ForeignKey(User,
                               on_delete=models.CASCADE,
                               related_name="trips")

    car = models.ForeignKey(Car,
                            on_delete = models.CASCADE,
                            related_name="trips")

    @property
    def arrive_from(self):
        """
         начальная точка всего маршрута
         :return:
         """
        return min(self.breakpoints.all(), key=lambda breakpoint: breakpoint.order_index).title

    @property
    def arrive_to(self):
        """
        конечная точка назначения
        :return:
        """
        return max(self.breakpoints.all(), key=lambda breakpoint: breakpoint.order_index).title

    @property
    def ordered_breakpoint_titles(self):
        """
        отсортированный список названий всех городов и их позиции в поездке
        :return:
        """
        return sorted([(breakpoint.title, breakpoint.order_index) for breakpoint in self.breakpoints.all()],
                      key=lambda ordered_breakpoint: ordered_breakpoint[1])


class Breakpoint(models.Model):
    class Meta:
        verbose_name = "Остановка"
        verbose_name_plural = "Остановки"

    title = models.CharField(max_length=400, verbose_name="Название места")
    order_index = models.PositiveIntegerField()
    trip = models.ForeignKey(Trip,
                             related_name = "breakpoints",
                             on_delete=models.CASCADE,
                             verbose_name="Поездка")



