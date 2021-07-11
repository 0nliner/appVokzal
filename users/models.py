import datetime

from django.db import models
from django.contrib.auth.models import AbstractUser

from phonenumber_field.modelfields import PhoneNumberField


class User(AbstractUser):

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

    REQUIRED_FIELDS = ["username", "phone_number", "first_name", "last_name"]
    USERNAME_FIELD = "email"

    # password = models.BinaryField()
    avatar = models.URLField(verbose_name="Фотография пользователя")

    first_name = models.CharField(max_length=250, verbose_name="Имя")
    last_name = models.CharField(max_length=250, verbose_name="Фамилия")
    is_male = models.BooleanField(blank=True, null=True, verbose_name="Пол")
    # TODO: протестировать поле
    phone_number = PhoneNumberField(verbose_name="Номер телефона", unique=True)
    email = models.EmailField(verbose_name="электронная почта", unique=True)
    birthday = models.DateField(blank=True,
                                null=True,
                                verbose_name="день рождения")

    about_myself = models.CharField(max_length=9999,
                                    verbose_name="О себе")

    @property
    def age(self):
        return int((datetime.datetime.now() - self.birthday).days / 365)

    @property
    def raiting(self):
        return sum(self.reviews, lambda review: int(review.num_stars)) / len(self.reviews)


