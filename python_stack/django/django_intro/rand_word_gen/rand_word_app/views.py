from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    rand = get_random_string(length=14)
    context = {
        'rand' : rand,
    }
    request.session.setdefault('attempts', 0)
    request.session['attempts'] += 1
    return render(request, 'rand_word_app/index.html', context)

def reset(request):
    del request.session['attempts']
    return redirect('/')