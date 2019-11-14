from django.db import models
from app.login_app.models import User
from datetime import datetime, timezone, timedelta

# Create Validators here (if necessary)
class CommentManager(models.Manager):
    def comment_validator(self, postData):
        errors = {}
        comment = Comment.objects.get(id=postData['comment_id'])
        print("comment: ", comment)
        print("comment date: ", comment.created_at)
        print("now", datetime.now())
        now = datetime.now(timezone.utc)
        time_diff = now - comment.created_at
        mins = time_diff.seconds /60
        if not (mins < 30):
            errors['too_much_time'] = "You had 30 mintues to delete your comment, now it's preserved for eternity"
        return errors

# Create your models here.
class Post(models.Model):
    user = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
    post = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    user = models.ForeignKey(User, related_name='user_comments', on_delete=models.CASCADE)
    post = models.ForeignKey(Post, related_name='post_comments', on_delete=models.CASCADE)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CommentManager()