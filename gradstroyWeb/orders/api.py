from order.models import Order
from rest_framework import viewsets, permissions
from .serializers import OrderSerializer

class OrderViewSet(viewsets.Model):
    queryset = Order.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = OrderSerializer