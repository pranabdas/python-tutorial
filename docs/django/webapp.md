---
title: Building webapp using Django framework
sidebar_label: Django
---
Django is a python web framework that helps you build rich interactive web apps.
Mozilla, Dropbox, Wikipedia, Spotify are some of the websites built using Django
framework. First of make sure you have `virtualenv` installed, it helps keep
your project dependencies separate. Create a new project directory, and activate
`virtualenv`:
```bash
mkdir django-project
cd django-project
virtualenv venv
source venv/bin/activate
```

Now we should be in virtual environment, you should see `venv>` prompt in the
Terminal. You can exit virtualenv by entering `deactivate`. Let's install
`django` under the venv.
```bash
pip3 install django
```
Once Django is installed, we can create our django project, let's call it
myWebApp.
```bash
django-admin startproject myWebApp .
```
Note the `.` in the end, which creates the project in our current directory,
otherwise it will create another extra top level folder. You have to be mindful
of your directory structure when you deploy it in a server.

Django projects are collection of apps. Say, we want to create an app called
hello, which says hello when visited /hello url. We can create our hello app by:
```bash
django-admin startapp hello
```

We have to tell our Django project that we have a new app. Open
`myWebApp/settings.py` and add hello to the `INSTALLED_APPS` list. You will see
a number of default apps already registered there.
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # my apps
    'hello',
]
```

Create urls. It's like a table of content. We want to keep the urls of each app
separated. Create `hello/urls.py` and include:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello, name='hello'),
]
```

Now we have to add the hello app urls in our main project. Open
`myWebApp/urls.py` and add the following:
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', include('hello.urls'))
]
```

Next step is to create views. Go to `hello/views.py` and add following function:
```python
from django.shortcuts import render

def hello(request):
    """hello page"""
    return render(request, 'hello/index.html')
```

Final step is to create the index.html. We create
`hello/templates/hello/index.html`
```html
<html>
  <head>
    <title>Hello django</title>
  </head>
  <body>
    <h1>Hello Django!</h1>
  </body>
</html>
```

Now we can run our django server :
```python
python3 manage.py runserver
```
and visit [localhost:8000/hello](localhost:8000/hello) in our browser. This is
our simplest hello app. Now let's say we want to greet a specific user by
his/her name. We could create individual user pages, or we can take the url
argument and generate a page based on that argument. We write the following view
function (`hello/views.py`):

```python
def greet(request, name):
    """greet anyone"""
    return render(request, 'hello/greet.html', {
        "name": name.capitalize()
        })
```

Create `hello/templates/hello/greet.html`:
```html
<html>
  <head>
    <title>Welcome</title>
  </head>
  <body>
    <h1>Hello {{ name }}!</h1>
  </body>
</html>
```

Go to `hello/urls.py` and include:
```python
path('/<str:name>', views.greet, name='greet'),
```
Now we can `python3 manage.py runserver` and visit an arbitrary url
`localhost:8000/hello/albert`

Learn more: [https://docs.djangoproject.com/](https://docs.djangoproject.com/)
