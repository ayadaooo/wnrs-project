from django.db import models


# Create your models here.
class Card(models.Model):
    level = models.IntegerField()
    question = models.TextField()
