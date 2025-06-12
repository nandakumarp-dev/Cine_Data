from django.db import models

import uuid

# Create your models here.

class BaseClass(models.Model):

    uuid = models.SlugField(unique=True,default=uuid.uuid4)

    active_status = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:

        abstract = True

class IndustryChoices(models.TextChoices):

    BOLLYWOOD = 'Bollywood', 'Bollywood'
    HOLLYWOOD = 'Hollywood', 'Hollywood'
    KOLLYWOOD = 'Kollywood', 'Kollywood'
    TOLLYWOOD = 'Tollywood', 'Tollywood'
    MOLLYWOOD = 'Mollywood', 'Mollywood'
    SANDALWOOD = 'Sandalwood', 'Sandalwood'
    OTHER = 'Other','Other'

class IndustryChoices(models.TextChoices):

    BOLLYWOOD = 'Bollywood', 'Bollywood'
    HOLLYWOOD = 'Hollywood', 'Hollywood'
    KOLLYWOOD = 'Kollywood', 'Kollywood'
    TOLLYWOOD = 'Tollywood', 'Tollywood'
    MOLLYWOOD = 'Mollywood', 'Mollywood'
    SANDALWOOD = 'Sandalwood', 'Sandalwood'
    OTHER = 'Other', 'Other'

class Artist(BaseClass):

    name = models.CharField(max_length=25)

    dob = models.DateField()

    photo = models.ImageField(upload_to='artist/')

    industry = models.CharField(max_length=25)

    proffession = models.CharField(max_length=50)


class Movies(BaseClass):

    name = models.CharField(max_length=50)

    released_year = models.CharField(max_length=4)

    # description = models.TextField()

    photo = models.ImageField(upload_to='movies/')

    # cast = models.ManyToManyField()

    # director = models.ForeignKey()

    # production = models.ForeignKey()

    # music_director = models.TextChoices()



    