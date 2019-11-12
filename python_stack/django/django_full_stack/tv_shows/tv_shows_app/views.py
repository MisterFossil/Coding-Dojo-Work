from django.shortcuts import render, redirect
from tv_shows_app.models import TV_Shows
from django.contrib import messages

# Create your views here.
def shows(request):
    all_shows = TV_Shows.objects.all()
    context = {
        'shows' : all_shows,
    }
    return render(request, 'tv_shows_app/shows.html', context)

def addAShow(request):
    return render(request, 'tv_shows_app/add_show.html')

def createShow(request):
    errors = TV_Shows.objects.basic_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)

        return redirect('/shows/new')
    else:
        title = request.POST['title']
        network = request.POST['network']
        release = request.POST['rel_date']
        description = request.POST['desc']
        TV_Shows.objects.create(title = title, network = network, release_date = release, description = description)
        curr_show = TV_Shows.objects.last()
        return redirect('/shows/' + str(curr_show.id))

def showInfo(request, id):
    show = TV_Shows.objects.get(id = id)
    context = {
        'show' : show,
    }
    return render(request, 'tv_shows_app/show_info.html', context)

def editShow(request, id):
    show = TV_Shows.objects.get(id = id)
    context = {
        'show' : show,
    }
    return render(request, 'tv_shows_app/edit_show.html', context)

def updateShow(request, id):
    errors = TV_Shows.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        redirectstr = 'shows/' + str(id) + '/edit'
        print(redirectstr)
        return redirect('/shows/' + str(id) + '/edit')
    else:
        show = TV_Shows.objects.get(id = id)
        show.title = request.POST['title']
        show.network = request.POST['network']
        show.release_date = request.POST['rel_date']
        show.description = request.POST['desc']
        show.save()
        return redirect('/shows/' + str(show.id))

def deleteShow(request, id):
    show = TV_Shows.objects.get(id = id)
    show.delete()
    return redirect('/shows')
