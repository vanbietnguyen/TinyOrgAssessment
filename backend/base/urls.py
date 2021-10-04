from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('recipes/', views.getRecipes, name='ingredients'),
    path('recipes/<str:pk>/', views.getRecipe, name='recipe'),
]
