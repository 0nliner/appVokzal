from django.db import models
from users.models import User


class CarImages(models.Model):
    img = models.URLField()


class Car(models.Model):
    class Meta:
        verbose_name = "Машина"
        verbose_name_plural = "Машины"

    owner = models.ForeignKey(User,
                              related_name="cars",
                              verbose_name="Владелец",
                              on_delete=models.CASCADE
                              )

    title = models.CharField(max_length=300,
                             verbose_name="Название автомобиля")

    num_places = models.PositiveIntegerField(default=4,
                                             verbose_name="Кол-во мест")

    number = models.CharField(max_length=50,
                              verbose_name="номер автомобиля")

    color = models.CharField(max_length=20,
                             verbose_name="цвет автомобиля")

