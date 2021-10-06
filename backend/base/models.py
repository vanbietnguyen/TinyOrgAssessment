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

class CustomUser(AbstractUser):
    allergens = models.JSONField(models.CharField(max_length=200), null=True, blank=True)

    def __str__(self):
        return self.email


# from django.contrib.auth import get_user_model
# User = get_user_model()
# >>> from django.contrib.auth.models import User
# >>> user=User.objects.create_user('foo', password='bar')
# >>> user.is_superuser=True
# >>> user.is_staff=True
# >>> user.save()