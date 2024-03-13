from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

movie_router = DefaultRouter()
movie_router.register(r'movies', MovieViewSet)
