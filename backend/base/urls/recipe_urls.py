from django.contrib import admin
from django.urls import path, include
from base.views import recipe_views as views

urlpatterns = [

    path('', views.getRecipes, name='ingredients'),
    path('<str:pk>/', views.getRecipe, name='recipe'),

]
