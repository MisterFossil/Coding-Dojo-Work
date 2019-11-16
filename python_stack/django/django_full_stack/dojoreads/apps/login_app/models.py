from django.db import models
import re
import bcrypt

# Create Validators Here
class UserValidator(models.Manager):
	def user_validator(self,postData):
		errors = {}
		# make sure name is more than 3 characters
		if len(postData['name']) < 3:
			errors['name_len'] = "Your name needs to be at least 3 characters"
		# make sure alias is longer than 3 characters
		if len(postData['alias']) < 3:
			errors['alias_length'] = "Your alias needs to be at least 3 characters"
		# make sure alias is unique
		if len(User.objects.filter(alias=postData['alias'])):
			errors['unique_alias'] = "Someone else has that alias"
		# make sure email is valid format
		EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
		if not EMAIL_REGEX.match(postData['email']):
			errors['email_format'] = 'Invalid email address format, example@cd.com'
		# make sure email is unique
		num_email = User.objects.filter(email=postData['email'])
		if len(num_email) > 0:
			errors['email_unique'] = 'That email is already taken'
		# make sure password is 8 characters
		if len(postData['password']) < 8:
			errors['pw_length'] = "Your password is too short, make it at least 8 characters"
		# make sure the confirm password matches the password
		if postData['password'] != postData['pw_confirm']:
			errors['pw_confirm_not_equal'] = "Your confirmation password and password don't match"

		return errors

	def login_validator(self,postData):
		errors = {}
		# make sure the email provided is in the database
		email = User.objects.filter(email=postData['email'])
		if len(email) < 1 or len(email) > 2:
			errors['no_email'] = "The email address provided is not in our database. Would you like to register for an account?"
			return errors

		# make sure the passwords match
		user = User.objects.get(email=postData['email'])
		if not bcrypt.checkpw(postData['password'].encode(), user.password.encode()):
			errors['no_pw_match'] = "The password you entered doesn't match the account on file"

		return errors


# Create your models here.
class User(models.Model):
	name = models.CharField(max_length=255)
	alias = models.CharField(max_length=255)
	email = models.CharField(max_length=255)
	password = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = UserValidator()

class Author(models.Model):
	name = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
	title = models.CharField(max_length=255)
	author = models.ForeignKey(Author, related_name='books', on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
	user = models.ForeignKey(User, related_name='user_reviews', on_delete=models.CASCADE)
	book = models.ForeignKey(Book, related_name='book_reviews', on_delete=models.CASCADE)
	content = models.TextField()
	rating = models.IntegerField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

