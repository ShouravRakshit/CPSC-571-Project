from rest_framework.serializers  import ModelSerializer
from  ..models import *

class MovieSerializer(ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'movie_title','genres')


