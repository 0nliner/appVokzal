from django.db import models
from users.models import User


class Chat(models.Model):
    class Meta:
        verbose_name = "Чат"
        verbose_name_plural = "Чаты"


class Msg(models.Model):
    class Meta:
        verbose_name = "Сообщение"
        verbose_name_plural = "Сообщения"

    written_by = models.ForeignKey(User,
                                   on_delete=models.CASCADE,
                                   verbose_name="Отправитель")

    content = models.CharField(max_length=1000, verbose_name="Содержимое сообщения")
    creation_date = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    chat = models.ForeignKey(Chat,
                             on_delete=models.CASCADE,
                             verbose_name="Чат")
