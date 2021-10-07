from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.fields.json import JSONField
# from django.contrib.postgres.fields import ArrayField


class Recipe(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    allergens = models.JSONField(models.CharField(max_length=200), null=True, blank=True)
    ingredients = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(null=True, blank=True,
                              default='placeholder.png')



class CustomUser(AbstractUser):
    allergens = models.JSONField(models.CharField(max_length=200), null=True, blank=True)
    firstName = models.CharField(max_length=200, null=True, blank=True)
    lastName = models.CharField(max_length=200, null=True, blank=True)
    bFirstName = models.CharField(max_length=200, null=True, blank=True)
    bLastName = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.email

class Allergen(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    createdAt = models.DateTimeField(auto_now_add=True)
# from django.contrib.auth import get_user_model
# User = get_user_model()
# >>> from django.contrib.auth.models import User
# >>> user=User.objects.create_user('foo', password='bar')
# >>> user.is_superuser=True
# >>> user.is_staff=True
# >>> user.save()