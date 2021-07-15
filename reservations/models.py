import datetime as dt

from django.db import models

from users.models import User
from trips.models import Trip, Breakpoint


class Reservation(models.Model):
    class Meta:
        verbose_name = "Бронь"
        verbose_name_plural = "Список бронирований"

    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             verbose_name="Зарезервировано пользователем",
                             related_name="reservations")

    trip = models.ForeignKey(Trip,
                             on_delete=models.CASCADE,
                             related_name="reservations",
                             verbose_name="Поездка")

    # places_quantity = models.PositiveIntegerField(verbose_name="Кол-во зарезервированных мест")

    arrive_from = models.ForeignKey(Breakpoint,
                                    on_delete=models.CASCADE,
                                    related_name="arrive_from_reservations",
                                    verbose_name="Откуда")

    arrive_to = models.ForeignKey(Breakpoint,
                                  on_delete=models.CASCADE,
                                  related_name="arrive_to_reservations",
                                  verbose_name="Куда")

    datetime = models.DateTimeField(verbose_name="На какой день и время забронировано")

    @property
    def places_quantity(self):
        return len([place for place in self.places.all()])


class Places(models.Model):
    place_index = models.PositiveIntegerField()
    reservation = models.ForeignKey(Reservation,
                                    on_delete=models.CASCADE,
                                    related_name="places")
