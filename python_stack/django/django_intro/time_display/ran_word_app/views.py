from django.shortcuts import render

# Create your views here.
def random_word(request):
    return render(request, 'ran_word_app/index.html')