from django.contrib.auth.models import AbstractUser
from django.db import models

# if this were a larger project, 
# I would separate user models from item models

class CustomUser(AbstractUser):
    # Any extra fields here
    # allergens =
    # recipes = 
    def __str__(self):
        return self.email
