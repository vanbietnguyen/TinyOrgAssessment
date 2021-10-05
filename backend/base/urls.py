from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('recipes/', views.getRecipes, name='ingredients'),
    path('recipes/<str:pk>/', views.getRecipe, name='recipe'),
    #auth! 
    path('auth/', include('rest_auth.urls')),    
    path('auth/register/', include('rest_auth.registration.urls'))

]
