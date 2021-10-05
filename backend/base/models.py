from django.db import models

# if this were a larger project, 
# I would separate user models from item models
class Recipe(models.Model):
    # Any extra fields here
    name = models.CharField(max_length=200, null=True, blank=True)
    allergens = models.CharField(max_length=200, null=True, blank=True)
    ingredients = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    createdAt = models.DateTimeField(auto_now_add=True)