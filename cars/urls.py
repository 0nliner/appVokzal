from rest_framework.routers import SimpleRouter
from .views import CarViewSet


router = SimpleRouter()
router.register("", CarViewSet)

urlpatterns = [
    *router.urls
]
