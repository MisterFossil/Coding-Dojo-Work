from django.shortcuts import render, redirect
from app.login_app.models import User
# from app.posts_app.models import Post, Comment - shouldn't need to import these anymore now that the wall is in posts_app
from django.contrib import messages
import bcrypt

# Create your views here.
def index(request):
    return render(request, 'login_app/index.html')

def validateLogin(request):
    if request.POST['log'] == 'register':
        reg_errors = User.objects.registration_validator(request.POST)
    elif request.POST['log'] == 'login':
        log_errors = User.objects.login_validator(request.POST)

    if request.POST['log'] == 'register':
        if len(reg_errors) > 0:
            for value in reg_errors.values():
                messages.error(request, value)

            return redirect('/')
        else:
            # hash the password
            hash_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())

            # else create a user and put them into their own "success" page
            User.objects.create(
                first_name=request.POST['first_name'],
                last_name=request.POST['last_name'],
                email=request.POST['email'],
                birthday=request.POST['birthday'],
                pw_hash=hash_pw.decode(), )

            request.session['first_name'] = request.POST['first_name']
            request.session['email'] = request.POST['email']
            return redirect('/wall')

    if request.POST['log'] == 'login':
        if len(log_errors) > 0:
            for value in log_errors.values():
                messages.error(request, value)

            return redirect('/') 
        else:
            # if user in the system, just go to "success" page
            first = User.objects.get(email = request.POST['email'])
            request.session['first_name'] = first.first_name
            request.session['email'] = request.POST['email']
            return redirect('/wall')

# I felt like the wall should be in the posts_app instead of continuing to hang out in login_app
# def wall(request):
#     request.session.setdefault('first_name', '')
#     if request.session['first_name'] == '':
#         return redirect('/')

#     user = User.objects.get(email=request.session['email'])
#     comments = Comment.objects.all()
#     posts = Posts.objects.all()
#     context = {
#         'user': user,
#         'comments': comments,
#         'posts': posts,
#     }
#     return render(request, 'login_app/welcome.html', context)

def logout(request):
    del request.session['first_name']
    del request.session['email']
    return redirect('/')