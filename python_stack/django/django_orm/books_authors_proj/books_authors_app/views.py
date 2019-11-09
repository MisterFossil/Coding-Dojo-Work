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
    authorsInBook = book.authors.all()
    authors = Author.objects.all()
    context = {
        'book' : book,
        'authorsInBook' : authorsInBook,
        'authors' : authors,
    }
    return render(request, 'books_authors_app/books.html', context)

def addAuthorToBook(request):
    authorId = request.POST['author']
    bookId = request.POST['bookId']
    author = Author.objects.get(id=authorId)
    book = Book.objects.get(id=bookId)
    book.authors.add(author)
    print(request.POST)
    return redirect('/books/' + bookId)