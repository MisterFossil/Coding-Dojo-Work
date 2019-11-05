from django.shortcuts import render, redirect
import random
import datetime

# Create your views here.
def index(request):
    request.session.setdefault('activity', [])
    request.session.setdefault('gold', 0)
    return render(request, 'ninja_app/index.html')

def process_money(request):
    gold = 0
    loc = request.session['activity']
    dest = request.POST['location']
    now = datetime.datetime.now()
    day_time = now.strftime("%Y/%m/%d (%I:%M %p)").lower()

    if dest == 'farm':
        gold = random.randint(10,20)
        request.session['gold'] += gold
        loc.append(f"<div class='earn'>Earned {gold} gold from the {dest}! {day_time}</div>")
    elif dest == 'cave':
        gold = random.randint(5,10)
        request.session['gold'] += gold
        loc.append(f"<div class='earn'>Earned {gold} gold from the {dest}! {day_time}</div>")
    elif dest == 'house':
        gold = random.randint(2,5)
        request.session['gold'] += gold
        loc.append(f"<div class='earn'>Earned {gold} gold from the {dest}! {day_time}</div>")
    elif dest == 'casino':
        flip = random.randint(1,2)
        if flip % 2 == 0:
            gold = random.randint(0,50)
            request.session['gold'] += gold
            loc.append(f"<div class='earn'>Earned {gold} gold from the {dest}! {day_time}</div>")
        else:
            gold = random.randint(0,50)
            request.session['gold'] -= gold
            loc.append(f"<div class='lost'>Oops...lost {gold} gold from the {dest}! {day_time}</div>")
    elif dest == 'reset':
        del request.session['gold']
        del request.session['activity']

    return redirect('/')