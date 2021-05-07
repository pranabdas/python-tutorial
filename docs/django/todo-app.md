---
title: Todo app
---
Now let's create slightly more advanced a To Do List app. We can create the app
by:
```bash
python3 manage.py startapp todo
```

Register the app in our main django application `myWebApp/settings.py`
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
    'today',
    'todo',
]
```
Register the url in `myWebApp/urls.py`:
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', include('hello.urls')),
    path('today/', include("today.urls")),
    path('todo/', include('todo.urls')),
]
```

Our todo urls does not exist yet, so let's create `todo/urls.py` with following
content:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```
Write index function in `todo/views.py`:
```python
from django.shortcuts import render

# Create your views here.

todo = ["item1", "item2", "item3"]

def index(request):
    return render(request, 'todo/index.html', {
        'todo': todo
    })
```

Crete our `todo/templates/todo/index.html` page:
```html
<html>
        <head>
                <title>To Do App</title>
        </head>
        <body>
                <ul>
                        {% for item in todo %}
                                <li>{{ item }}</li>
                        {% endfor %}
                </ul>
        </body>
</html>
```
Now we can `python3 manage.py runserver` and check `http://localhost:8000/todo/`

Let's add the functionality to add todo items. Write a new view function:
```python
def addtodo(request):
    return render(request, 'todo/add.html')
```

Include it in our `todo/urls.py`:
```python
from django.urls import path
from . import views

app_name = 'todo'

urlpatterns = [
    path('', views.index, name='index'),
    path('add', views.addtodo, name='addtodo'),
]
```

Create `todo/templates/todo/add.html`:
```html
<html>
        < head>
                <title>Todo app</title>
        < /head>
        <body>
                <h3>Add To Do Item</h3>
                <form>
                        <input type="text" name="todo">
                        <input type="submit">
                </form>
        </body>
</html>
```

Our add.html and index.html are very similar except the body part. We can use
templates in such cases. Create `todo/templates/base.html`:
```html
<html>
        <head>
                <title>Todo app</title>
        </head>
        <body>
                {% block bodycontent %}
                {% endblock %}
        </body>
</html>
```

Rewrite our index.html:
```html
{% extends 'todo/base.html' %}

{% block bodycontent %}
    <h1>To Do List</h1>
    <ul>
        {% for item in todo %}
            <li>{{ item }}</li>
        {% endfor %}
    </ul>
    <a href="{% url 'todo:addtodo' %}">Add To Do</a>
{% endblock %}
```

Rewrite our add.html:
```html
{% extends 'todo/base.html' %}

{% block bodycontent %}
    <h3>Add To Do Item</h3>
    <form>
            <input type="text" name="todo">
            <input type="submit">
    </form>
    <a href="{% url 'todo:index' %}">Go back to To Do list</a>
{% endblock %}
```

Instead of using html forms, we can use Django form. Modify `todo/vies.py`:
```python
from django.shortcuts import render
from django import forms

# Create your views here.

todo = ["item1", "item2", "item3"]

class AddTodo(forms.Form):
    AddTodo = forms.CharField(label="Add To do")

def index(request):
    return render(request, 'todo/index.html', {
        'todo': todo
    })

def addtodo(request):
    return render(request, 'todo/add.html', {
        "form": AddTodo
        })
```

```html
{% extends 'todo/base.html' %}

{% block bodycontent %}
    <h3>Add To Do Item</h3>
    <form action="{% url 'todo:addtodo'  %}" method="POST">
            {% csrf_token  %}
            {{ form }}
            <input type="submit">
    </form>
    <a href="{% url 'todo:index' %}">Go back to To Do list</a>
{% endblock %}
```
We have to add the ability to add the tasks:
```python
from django.shortcuts import render
from django import forms
from django.http import HttpResponseRedirect
from django.urls import reverse

todo = ["item1", "item2", "item3"]

class AddTodo(forms.Form):
    AddTodo = forms.CharField(label="Add To do")

def index(request):
    return render(request, 'todo/index.html', {
        'todo': todo
    })

def addtodo(request):
    if request.method == "POST":
        form = AddTodo(request.POST)
        if form.is_valid():
            new_todo = form.clean_data['AddTodo']
            todo.append(new_todo)
            return HttpResponseRedirect(reverse("todo:index"))
        else:
            return render(request, 'todo/add.html', {
                "form": form
                })

    return render(request, 'todo/add.html', {
        "form": AddTodo
        })
```
