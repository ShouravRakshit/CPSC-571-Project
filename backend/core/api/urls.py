from rest_framework.routers  import DefaultRouter
from movie.api.urls import movie_router
from django.urls import path, include

router = DefaultRouter()
# movies

router.registry.extend(movie_router.registry)

urlpatterns = [
    path('', include(router.urls)), # for the root of our api to access all the endpoints related to movies
]