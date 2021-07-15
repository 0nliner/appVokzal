from django.contrib import admin
from .models import Trip, Breakpoint, LockedPlace


admin.site.register(Trip)
admin.site.register(Breakpoint)
admin.site.register(LockedPlace)