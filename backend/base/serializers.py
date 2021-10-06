from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import Recipe, CustomUser

class RecipeSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'is_staff', 'allergens']
