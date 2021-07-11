import datetime

from django.db import models
from django.contrib.auth.models import AbstractUser

from phonenumber_field.modelfields import PhoneNumberField

from trips.models import Trip


class User(AbstractUser):

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

    avatar = models.URLField(verbose_name="Фотография пользователя")

    first_name = models.CharField(max_length=250, verbose_name="Имя")
    last_name = models.CharField(max_length=250, verbose_name="Фамилия")
    is_male = models.BooleanField(blank=True, null=True, verbose_name="Пол")
    # TODO: протестировать поле
    phone_number = PhoneNumberField(verbose_name="Номер телефона")
    email = models.EmailField(verbose_name="электронная почта")
    birthday = models.DateField(blank=True,
                                null=True,
                                verbose_name="день рождения")

    about_myself = models.CharField(max_length=9999,
                                    verbose_name="О себе")

    # reviews = models.ManyToManyField()
    # cars =
    # chats =

    @property
    def age(self):
        return int((datetime.datetime.now() - self.birthday).days / 365)

    @property
    def raiting(self):
        return sum(self.reviews, lambda review: int(review.num_stars)) / len(self.reviews)


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

    num_stars = models.CharField(choises=(
        ("1", "1"),
        ("2", "2"),
        ("3", "3"),
        ("4", "4"),
        ("5", "5")),
        verbose_name="Оставлено звёзд")

    content = models.CharField(max_length=1000, verbose_name="Содержимое отзыва")

