from rest_framework import routers
from .api import ProductViewSet

router = routers.DefaultRouter()
router.register('api/catalog', ProductViewSet, 'catalog')

urlpatterns = router.urls