from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password


from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from base.serializers import UserSerializer, UserSerializerWithToken

####################### AUTH/TOKEN ##################################

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        print('we are in token validator')
        # Add custom claims
        data['username'] = self.user.username
        data['email'] = self.user.email
        data['allergens'] = self.user.allergens
        # ...

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


####################### USERS ##################################
@api_view(['POST'])
def signupUser(request):
    data = request.data
    User = get_user_model()
    try:
        user = User.objects.create_user(
            username = data['username'],
            email = data['email'],
            allergens = data['allergens'],
            password = make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many = False)
        return Response(serializer.data)
    except:
        message = { 'detail': 'User with this email already exists' }
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def loginUser(request):
#     print('in loginview')
#     # data = request.data
#     # serializer = UserSerializerWithToken(user, many = False)
#     # return Response(serializer.data)
#     return Response('data')

# @api_view(['GET'])
# def getUserProfile(request):
#     user = request.user
#     serializer = UserSerializer(user, many=False)
#     return Response(serializer.data)

# from django.contrib.auth import get_user_model
# User = get_user_model()
# >>> user=User.objects.create_user('foo', password='bar')
# >>> user.is_superuser=True
# >>> user.is_staff=True
# >>> user.save()