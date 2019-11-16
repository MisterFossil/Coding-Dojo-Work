from django.shortcuts import render, redirect
from apps.login_app.models import User, Book, Author, Review
from django.contrib import messages
import bcrypt

# Create your views here.
# Put Renders Here:
def index(request):
	request.session['email'] = ""
	return render(request, 'login_app/index.html')

def books(request):
	if request.session['email'] == "":
		return redirect('/')
	user = User.objects.get(email=request.session['email'])
	books = Book.objects.all().order_by('title')

	three_newest_reviews = Review.objects.all().order_by('-id')[:3]
	print(three_newest_reviews)
	context = {
		'user': user,
		'books': books,
		'reviews': three_newest_reviews,
	}
	return render(request, 'login_app/books.html', context)

def addBookForm(request):
	authors = Author.objects.all()
	books = Book.objects.all()
	context = {
		'authors': authors,
		'books': books,
	}
	return render(request, 'login_app/add_book.html', context)

def bookInfo(request, id):
	book = Book.objects.get(id=int(id))
	reviews = Review.objects.filter(book=book).order_by('-id')
	context = {
		'book': book,
		'reviews': reviews,

	}
	return render(request, 'login_app/book_info.html', context)

def userInfo(request,id):
	user = User.objects.get(id=int(id))
	user_rev = user.user_reviews.all()
	context = {
		'user': user,
		'reviews': user_rev,
	}
	return render(request, 'login_app/user_info.html', context)




# Put Redirects Here:
def validateRegister(request):
	errors = User.objects.user_validator(request.POST)

	if len(errors) == 0:
		# hash password
		hash_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
		# create user
		User.objects.create(name=request.POST['name'],
							alias=request.POST['alias'],
							email=request.POST['email'],
							password=hash_pw.decode(),
							)
		request.session['email'] = request.POST['email']
		return redirect('/books')
	else:
		for value in errors.values():
			messages.error(request,value)
		return redirect('/')

def validateLogin(request):
	errors = User.objects.login_validator(request.POST)

	if len(errors) == 0:
		# if no errors bring user to their landing page
		request.session['email'] = request.POST['email']
		return redirect('/books')
	else:
		for value in errors.values():
			messages.error(request,value)
		return redirect('/')	

def createBook(request):
	# grab the user
	user = User.objects.get(email=request.session['email'])
	# should add validation so you dont add the same author or the same book
	# add the author
	if request.POST['new_author'] != "":
		Author.objects.create(name=request.POST['new_author'])
		author = Author.objects.get(name=request.POST['new_author']) 
	else:
		author = Author.objects.get(id=int(request.POST['author']))
	
	# add the book with the author
	Book.objects.create(title=request.POST['book_title'],author=author)
	book = Book.objects.get(title=request.POST['book_title'])

	# add the review with the book, author, content, and rating
	Review.objects.create(user=user, book=book, content=request.POST['review'], rating=int(request.POST['rating']))

	# TODO: Change redirect to individual book page when you get it setup
	return redirect('/books')

def addReview(request, id):
	user = User.objects.get(email=request.session['email'])
	book = Book.objects.get(id=id)
	Review.objects.create(user=user,book=book,content=request.POST['content'],rating=request.POST['rating'])
	return redirect('/book/' + str(id))

def logout(request):
	print(request.session['email'])
	del request.session['email']
	return redirect('/')
