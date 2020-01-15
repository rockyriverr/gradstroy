from rest_framework import routers
from .api import OrderViewSet

router = routers.DefaultRouter()
router.register('api/orders', OrderViewSet, 'order')

urlpatterns = router.urls