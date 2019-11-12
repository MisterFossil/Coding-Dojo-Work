from django.db import models
from datetime import datetime

# Creating the validation managers here
class TV_Manager(models.Manager):
    def basic_validator(self, postData):
        # title, network, release_date, description
        errors = {}
        if len(postData['title']) < 2:
            errors['title'] = "You must have a title that is more than 2 characters long"
        if len(postData['network']) < 3:
            errors['network'] = "The network must be at least 3 characters"
        if len(postData['desc']) < 10 and len(postData['desc']) > 0:
            errors['description'] = "If you choose to add a description, it must be at least 10 characters"

        curr_date = str(datetime.date(datetime.now()))
        if postData['rel_date'] >= curr_date:
            errors['release_date'] = "The release date must be from the past."

        # postData.setDefault('id', 0)
        # if(postData['id'] != 0):
        #     dup_title = TV_Shows.objects.filter(title = postData['title']).exclude(id = postData['id'])
        # else:
        dup_title = TV_Shows.objects.filter(title = postData['title'])
        if dup_title:
            errors['duplicate_title'] = "This title is already in the database."
        return errors

# Create your models here.
class TV_Shows(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255) 
    release_date = models.DateField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = TV_Manager()
