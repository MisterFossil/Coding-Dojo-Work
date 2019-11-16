"""dojoreads URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
	https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
	1. Add an import:  from my_app import views
	2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
	1. Add an import:  from other_app.views import Home
	2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
	1. Import the include() function: from django.urls import include, path
	2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from apps.login_app import views

urlpatterns = [
	path('', views.index),
	path('books', views.books),
	path('valid_reg', views.validateRegister),
	path('valid_login', views.validateLogin),
	path('add_book_form', views.addBookForm),
	path('create_book', views.createBook),
	path('book/<id>', views.bookInfo),
	path('book/<id>/add_review', views.addReview),
	path('user/<id>', views.userInfo),
	path('logout', views.logout),
	path('admin/', admin.site.urls),
]
