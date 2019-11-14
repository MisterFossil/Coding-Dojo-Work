from django.shortcuts import render, redirect
from app.login_app.models import User
from app.posts_app.models import Post, Comment
from django.contrib import messages

# Create your views here.
def createPost(request):
    email = request.POST['email']
    text = request.POST['post']

    user = User.objects.get(email=email)
    Post.objects.create(user=user, post=text)
    return redirect('/wall')

def createComment(request):
    email = request.POST['email']
    post = Post.objects.get(id=request.POST['post_id'])
    text = request.POST['comment']
    user = User.objects.get(email=email)
    Comment.objects.create(user=user,post=post,comment=text)
    return redirect('/wall')

def deleteComment(request):
    errors = Comment.objects.comment_validator(request.POST)
    if len(errors) == 0:
        comment = Comment.objects.get(id = request.POST['comment_id'])
        comment.delete()
    else:
        for value in errors.values():
            messages.error(request, value)

    return redirect('/wall')

def wall(request):
    request.session.setdefault('first_name', '')
    if request.session['first_name'] == '':
        return redirect('/')

    user = User.objects.get(email=request.session['email'])
    comments = Comment.objects.all()
    posts = Post.objects.all()
    context = {
        'user': user,
        'comments': comments,
        'posts': posts,
    }
    return render(request, 'login_app/welcome.html', context)
