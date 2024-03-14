from rest_framework.viewsets import ModelViewSet
from ..models import Movie
from .serializers import MovieSerializer
from rest_framework import viewsets, filters

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['movie_title']

    