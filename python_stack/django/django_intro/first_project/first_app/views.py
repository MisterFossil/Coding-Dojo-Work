from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return HttpResponse("<p>Placeholder to later display a list of all blogs</p>")

def new(request):
    return HttpResponse("<p>Placeholder to display a new form to create a new blog</p>")

def create(request):
    return redirect('/')

def show(request, number):
    return HttpResponse("<p>Placeholder to display blog: " + str(number) + "</p>")

def edit(request, number):
    return HttpResponse("<p>Placeholder to edit blog: " + str(number) + "</p>")

def destroy(request, number):
    return redirect('/')