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

class ProffessionChoices(models.TextChoices):

    ACTOR = 'Actor', 'Actor'
    ACTRESS = 'Actress', 'Actress'
    DIRECTOR = 'Director', 'Director'
    MUSIC_DIRECTOR = 'Music Director', 'Music Director'
    PRODUCER = 'Producer', 'Producer'
    WRITER = 'Writer', 'Writer'
    CINEMATOGRAPHER = 'Cinematographer', 'Cinematographer'
    EDITOR = 'Editor', 'Editor'

class Artist(BaseClass):

    name = models.CharField(max_length=25)
    dob = models.DateField()
    photo = models.ImageField(upload_to='artist/')
    industry = models.CharField(max_length=25,choices=IndustryChoices.choices)
    proffession = models.CharField(max_length=50,choices=ProffessionChoices.choices)

    def __str__(self):

        return f'{self.name} - {self.proffession}'
    
    class Meta:

        verbose_name = 'Artist'
        verbose_name_plural = 'Artists'

class Genre(BaseClass):

    name = models.CharField(max_length=20)

    def __str__(self):

        return self.name
    
    class Meta:

        verbose_name = 'Genre'
        verbose_name_plural = 'Genre'

class Production(BaseClass):

    comp_name = models.CharField(max_length=25)
    owner = models.CharField(max_length=25)

    def __str__(self):

        return self.comp_name
    
    class Meta:

        verbose_name = 'Production'
        verbose_name_plural = 'Productions'    

class Movies(BaseClass):

    name = models.CharField(max_length=50)
    released_year = models.CharField(max_length=4)
    runtime = models.TimeField()
    description = models.TextField()
    genre = models.ForeignKey('Genre',on_delete=models.CASCADE)
    industry = models.CharField(max_length=20,choices=IndustryChoices.choices)
    photo = models.ImageField(upload_to='movies/')
    cast = models.ManyToManyField('Artist',related_name='cast')
    director = models.ForeignKey('Artist',on_delete=models.CASCADE,related_name='director')
    production = models.ForeignKey('Production',on_delete=models.CASCADE)
    music_director = models.ForeignKey('Artist',on_delete=models.CASCADE,related_name='music_director')

    def __str__(self):

        return self.name
    
    class Meta:

        verbose_name = 'Movie'
        verbose_name_plural = 'Movies'

    