from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('', views.getRecipeRoutes, name='recipeRoutes'),
    path('recipes/', views.getRecipes, name='ingredients'),
    path('recipes/<str:pk>/', views.getRecipe, name='recipe'),

    path('user/profile/', views.getUserProfile, name='user-profile'),



]
