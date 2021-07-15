from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include



urlpatterns = [
    path('admin/', admin.site.urls),

    path('trips/', include('trips.urls')),
    path('cars/', include('cars.urls')),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
