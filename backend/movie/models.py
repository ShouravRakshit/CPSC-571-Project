from django.db import models

# Create your models here.
class Movie(models.Model):
    movie_title = models.CharField(max_length=500)
    genres = models.TextField()

    def  __str__(self):
        return self.movie_title