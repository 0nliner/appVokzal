from rest_framework.routers import SimpleRouter
from .views import TripsViewSet

router = SimpleRouter()
router.register("", TripsViewSet)

urlpatterns = [
    *router.urls
]
