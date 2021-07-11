from django.db import models
from trips.models import Trip

from users.models import User


class Review(models.Model):
    class Meta:
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"

    trip = models.ForeignKey(Trip,
                             on_delete=models.CASCADE,
                             verbose_name="Поездка")

    written_by = models.ForeignKey(User,
                                   on_delete=models.CASCADE,
                                   verbose_name="Отзыв оставлен пользователем",
                                   related_name="reviews")

    num_stars = models.CharField(
        max_length=1,
        choices=(
            ("1", "1"),
            ("2", "2"),
            ("3", "3"),
            ("4", "4"),
            ("5", "5")),
        verbose_name="Оставлено звёзд")

    content = models.CharField(max_length=1000, verbose_name="Содержимое отзыва")
