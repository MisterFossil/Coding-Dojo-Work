from django.db import models
import re
import bcrypt
import datetime

# User Model Validator
class UserManager(models.Manager):
    def registration_validator(self, postData):
        errors = {}
        # first name should be at least 2 characters
        if len(postData['first_name']) < 2:
            errors['first_name_min'] = "The first name field has too few characters. (2+ characters)"
        # last name should be at least 2 characters
        if len(postData['last_name']) < 2:
            errors['last_name_min'] = "The last name field has too few characters. (2+ characters)"
        # email address should be valid
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):          
            errors['email'] = ("Invalid email address! example@gmail.com")

        # NB: registered email should be unique
        email_ck = User.objects.filter(email = postData['email'])
        if len(email_ck) > 0:
            errors['unique_email'] = "The email you are submitting is already taken, please try a different email or logging in"

        # passwords should match
        if postData['password'] != postData['pw_confirm']:
            errors['pw_match'] = "The passwords don't match, check your spelling and make sure CAPS LOCK is off."
        # passwords should be at least 8 characters
        if len(postData['password']) < 8:
            errors['pw_length'] = "The password length is invalid. (8+ characters)"

        # NB: check birthday is in the past and (SB)birthday is 13 or older

        return errors

    def login_validator(self, postData):
        errors = {}
        # login postdata email should match an entry in User
        user_ck = User.objects.filter(email = postData['email'])
        if len(user_ck) == 0:
            errors['no_email'] = "The email you've entered doesn't exist in our records. Create a new account?"
            return errors
        # hashed password should match the decoded PW for the user in the DB 
        pw_match = bcrypt.checkpw(postData['password'].encode(), user_ck[0].pw_hash.encode())
        if not pw_match:
            errors['invalid_pw'] = "The password you have entered does not match our records"
        return errors


# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=255)
    birthday = models.DateField(null=True) # - couldn't get this to work
    pw_hash = models.CharField(max_length=80)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()