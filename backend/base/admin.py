from .models import *
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):    
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'allergens', 'username']

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Recipe)
admin.site.register(Allergen)