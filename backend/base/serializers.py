from rest_framework.serializers import ModelSerializer, SerializerMethodField
from django.contrib.auth.models import User
from .models import Allergen, Recipe, CustomUser
from rest_framework_simplejwt.tokens import RefreshToken

class RecipeSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class AllergenSerializer(ModelSerializer):
    class Meta:
        model = Allergen
        fields = '__all__'

class UserSerializer(ModelSerializer):
    _id = SerializerMethodField(read_only=True)
    isAdmin = SerializerMethodField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', '_id' 'username', 'email', 'isAdmin', 'allergens']
    
    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):
    token = SerializerMethodField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', '_id', 'username', 'email', 'isAdmin', 'token', 'allergens']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)