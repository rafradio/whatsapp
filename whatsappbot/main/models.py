from django.db import models

class Message(models.Model):
    type = models.CharField('Тип', max_length=55)
    text = models.TextField('Текст собщения')