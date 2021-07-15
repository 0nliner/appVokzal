from rest_framework.serializers import ModelSerializer

from .models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        # fields = "__all__"
        exclude = ["password", "last_login", "is_superuser", "is_staff", "is_active", "user_permissions"]
        depth = 1


class UserSerializerOnlyId(ModelSerializer):
    class Meta:
        model = User
        fields = ["id"]

