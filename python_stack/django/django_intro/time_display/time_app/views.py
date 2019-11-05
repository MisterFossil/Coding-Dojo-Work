from django.shortcuts import render
import datetime

# Create your views here.
def index(request):
    now = datetime.datetime.now()
    date = now.strftime("%b %d, %Y")
    time = now.strftime("%I:%M %p")
    context = {
        'time' : time,
        'date' : date,
    }
    print("THE TIME NOW IS ******", date , time)
    return render(request, 'time_app/index.html', context)