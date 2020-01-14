from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=30)
    img = models.ImageField()
    description = models.CharField(max_length=200)
    price = models.IntegerField()
