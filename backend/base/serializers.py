from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import Recipe

class RecipeSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
