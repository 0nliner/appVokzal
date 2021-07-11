from django.db import models


class Trip(models.Model):
    class Meta:
        verbose_name = "Поездка"
        verbose_name_plural = "Поездки"


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



