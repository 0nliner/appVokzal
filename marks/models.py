from django.db import models


class MarkImage(models.Model):
    class Meta:
        verbose_name = "Фотография места"
        verbose_name_plural = "Фотографии мест"

    img_url = models.URLField()


class Mark(models.Model):
    class Meta:
        verbose_name = "Метка"
        verbose_name_plural = "Метки"

    # ширина и долгота
    # TODO: реализовать
    lng = models
    lat = models

    title = models.CharField(max_length=300)
    mark_type = models.CharField(
        max_length=30,
        choices=(
            ("Camera", "Камера"),
            ("Cafe", "Кафе"),
            ("Police", "Полиция")
        )
    )

    num_stars = models.CharField(
        max_length=1,
        choices=(
            ("1", "1"),
            ("2", "2"),
            ("3", "3"),
            ("4", "4"),
            ("5", "5")),
        verbose_name="Оставлено звёзд")

