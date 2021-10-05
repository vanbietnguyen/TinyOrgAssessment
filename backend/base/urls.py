from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.getRecipeRoutes, name='recipeRoutes'),
    path('recipes/', views.getRecipes, name='ingredients'),
    path('recipes/<str:pk>/', views.getRecipe, name='recipe'),

]
