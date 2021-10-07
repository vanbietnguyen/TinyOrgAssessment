from django.contrib import admin
from django.urls import path
from base.views import user_views as views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), 
        name='token_obtain_pair'),
    
    path('signup/', views.signupUser, name = 'signup'),

    # path('users/profile/', user_views.getUserProfile, name='user-profile'),

]
