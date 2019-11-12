from django.shortcuts import render, redirect
from books_authors_app.models import Book, Author

# Create your views here.
def index(request):
    books = Book.objects.all()
    context = {
        'books' : books,
    }
    return render(request, 'books_authors_app/index.html', context)

def addbook(request):
    Book.objects.create(title = request.POST['title'], desc = request.POST['desc'])
    return redirect('/')

def viewbook(request, id):
    book = Book.objects.get(id=id)
    authors = Author.objects.all()
    authorsInBook = book.authors.all()
    # I want the authors that are NOT associated with 'book'
    authorsNotInBook = authors.exclude(books = book)
    context = {
        'book' : book,
        'authors' : authors,
        'authorsInBook' : authorsInBook,
        'authorsNotInBook' : authorsNotInBook,
        }
    return render(request, 'books_authors_app/books.html', context)

def addAuthorToBook(request):
    authorId = request.POST['author']
    bookId = request.POST['bookId']
    author = Author.objects.get(id=authorId)
    book = Book.objects.get(id=bookId)
    book.authors.add(author)
    return redirect('/books/' + bookId)

def viewAuthors(request):
    authors = Author.objects.all()
    context = {
        'authors' : authors,
    }
    return render(request, 'books_authors_app/authorlist.html', context)

def addAuthor(request):
    Author.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], notes = request.POST['notes'])
    return redirect('/authors')

def authorInfo(request, id):
    author = Author.objects.get(id=id)
    # book = Book.objects.get(id=id)
    books = Book.objects.all()
    booksInAuthor = author.books.all()
    # I want the books that are NOT associated with 'author'
    booksNotInAuthor = books.exclude(authors = author)
    context = {
        'author' : author,
        'books' : books,
        'booksInAuthor' : booksInAuthor,
        'booksNotInAuthor' : booksNotInAuthor,
        }
    return render(request, 'books_authors_app/authorinfo.html', context)

def addBookToAuthor(request):
    authorId = request.POST['authorId']
    bookId = request.POST['book']
    author = Author.objects.get(id=authorId)
    book = Book.objects.get(id=bookId)
    book.authors.add(author)
    print(request.POST)
    return redirect('/authors/' + authorId)