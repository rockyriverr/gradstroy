from django.db import models
from django.contrib.auth.models import User
class Order(models.Model):
    status = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, default ='')
    owner = models.ForeignKey(User, related_name="orders", on_delete=models.CASCADE, null=True)
