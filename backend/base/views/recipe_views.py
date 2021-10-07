from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status

from base.serializers import RecipeSerializer
from base.models import Recipe

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getRecipes(request):
    # recipes = [{"createdAt":"2021-07-18T22:43:36.964Z","name":"Cinna-baby","allergens":["cinnamon"],"id":"1"},{"createdAt":"2021-07-19T03:00:57.591Z","name":"Cinna-soy","allergens":["soybean","cinnamon"],"id":"2"},{"createdAt":"2021-07-19T07:49:24.439Z","name":"Soy-Story","allergens":["soybean"],"id":"3"},{"createdAt":"2021-07-19T04:30:04.761Z","name":"Tropic Like It's Hot","allergens":[],"id":"4"},{"createdAt":"2021-07-18T17:01:16.048Z","name":"If you Like Pina Coladas","allergens":["milk"],"id":"5"},{"createdAt":"2021-07-18T19:30:47.674Z","name":"Noatmeal Raisin","allergens":["milk"],"id":"6"},{"createdAt":"2021-07-18T18:47:51.535Z","name":"By The Beach","allergens":[],"id":"7"},{"createdAt":"2021-07-19T16:48:09.613Z","name":"Original","allergens":[],"id":"8"}]
    # recipe = [{"createdAt":"2021-07-18T22:43:36.964Z","name":"Cinna-baby","allergens":["cinnamon"],"id":"1"}]
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getRecipe(request, pk):
    recipe = Recipe.objects.get(_id=pk)
    serializer = RecipeSerializer(recipe, many=False)
    
    return Response(serializer.data)