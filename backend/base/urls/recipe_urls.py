from django.contrib import admin
from django.urls import path, include
from base.views import recipe_views as views

urlpatterns = [

    path('', views.getRecipes, name='recipes'),
    path('allergens/', views.getAllergens, name='allergens'),

]
