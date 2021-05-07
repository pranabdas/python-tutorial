---
title: Learning log
---
Here we will see some more advanced features like admin account and databases.

Creating a Project in Django:
```bash
django-admin.py startproject learning_log .
```
Our project is called `learning_log`.

Creating a database for the project:
```bash
python3 manage.py migrate
```
Now you will see a new file called `db.sqlite3` in the directory.

Viewing the Project:
```bash
python3 manage.py runserver
```
You can visit `localhost:8000` in your browser, and you should see a default
django webpage. Django project is consists of a set of individual apps. This
modular approach helps to organize complex apps. In order to start an app:
```bash
python3 manage.py startapp learning_log_app
```
We call our app `learning_log_app`. Check all the directory structure.

### Creating models
Open `learning_log_app/models.py` and define a model:
```python
class Topic(models.Model):
    """A topic the user is learning"""
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """Return a string representation of the model"""
        return self.text
```

We can build as many models we want. We can define it by our requirements. Here
we are defining our Topic model based on the Django in-built `models.Model`.

### Activating models
Once we have defined a model in our app, we have to include in our global django
settings. Open `learning_log/settings.py` add `learning_log_app` app to the list
of `INSTALLED_APPS` list:
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # My apps
    'learning_log_app',
]
```

Make the migration to take changes effect:
```bash
python3 manage.py makemigrations learning_log_app
python3 manage.py migrate
```

### Create superuser
```bash
python3 manage.py createsuperuser
```
Provide username and password.

Registering a model with the admin site: Open `learning_log_app/admin.py` and
add the following:
```python
from learning_log_app.models import Topic

admin.site.register(Topic)
```

Now we can start the server `python3 manage.py runserver` and login to
`localhost:8000/admin` and create Topics.

Let's define another model for the Entry. Open `learning_log_app/models.py` and
define a model for *Entry*.
```python
class Entry(models.Model):
    """Something specific learned about a topic"""
    topic = models.ForeignKey(Topic, on_delete=models.DO_NOTHING,)
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'entries'
    def __str__(self):
        """Return a string representation of the model."""
        return self.text[:50] + "..."
```

Make changes to the `learning_log_app/admin.py`:
```python
from django.contrib import admin

from learning_log_app.models import Topic
from learning_log_app.models import Entry

admin.site.register(Topic)
admin.site.register(Entry)
```

Make migrations:
```python
python3 manage.py makemigrations learning_log_app
python3 manage.py migrate
```
You can start server and check out the new changes.

### Creating pages
Creating pages has three steps: (1) Mapping URL, (2) Writing views, (3) Writing
templates.

**Mapping URL:** You have tell Django, what to look for when a url is requested.
Open `learning_log/urls.py` and include the following. You will see that the
`admin/` path is already registered when we created the admin account. Now we
are including our home page (base url) will look for the urls in the
learning_log_app app urls.
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('learning_log_app.urls'))
]
```

Create an urls.py in the directory learning_log_app and include the following:
```python
"""This file includes the urls of our learning_log_app """

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

**Writing view:** A view function takes the request and prepares a webpage to
render. Open `learning_log_app/views.py` and add the following:
```py
from django.shortcuts import render

def index(request):
    """The home page for Learning Log"""
    return render(request, 'learning_log_app/index.html')
```

**Writing a template:** We will store the templates in the following directory:
`learning_log_app/templates/learning_log_app`. Create an
`learning_log_app/templates/learning_log_app/index.html`:
```html
<html>
    <head>
        <title>Learning log homepage</title>
    </head>
    <body>
        <h3>Welcome to learning Log</h3>
        <p>Here you can keep track of the topics you are learning.</p>
    </body>
</html>
```

Note that in the above code block there is an extra space in `head` tags, please
remove the spaces in your actual code (my website search function has some
issues with the `head` tag, and I am using this workaround to counter the error
currently). We can browse the homepage `localhost:8000` and see the index page.

Now that we know how to build a basic page, we will follow the same process to
build a page to list our topics and another to show the entries for each topic.

### Creating templates
In almost all web project you will find, there are some contents that are shared
by several other pages. Instead of hard coding those common elements, we can
build templates. Let's create a template `base.html` where we will include the
title of the pages. Create a file
`learning_log_app/templates/learning_log_app/base.html` and include our title
html:
```html
<html>
        <head>
                <title>Learning log</title>
        </head>
        <body>
                <h3><a href="{% url 'index' %}">Learning log</a></h3>
                {% block content %}{% endblock content %}
        </body>
</html>
```

Now we will use this template to build other pages. Let's rewrite our
`learning_log_app/templates/learning_log_app/index.html` using this template:
```html
{% extends "learning_log_app/base.html" %}

{% block content %}
<p>Learning Log helps you keep track of your learning, for any topic you're learning about.</p>
{% endblock content %}
```

Let's create our Topics page. Register the url pattern in
`learning_log_app/urls.py`:
```python
urlpatterns = [
    url('', views.index, name='index'),

    # Show all topics
    url('topics/', views.topics, name='topics'),
]
```

Register the views in `learning_log_app/view.py`:
```python
from learning_log_app.models import Topic

def topics(request):
    """Show all topics."""
    topics = Topic.objects.order_by('date_added')
    context = {'topics': topics}
    return render(request, 'learning_log_app/topics.html', context)
```
Create `learning_log_app/templates/learning_log_app/topics.html`
```html
{% extends "learning_log_app/base.html" %}

{% block content %}
<h3>List of topics</h3>
<ul>
    {% for topic in topics %}
        <li>{{ topic }}</li>
    {% empty %}
        <li>No topics have been added yet.</li>
    {% endfor %}
  </ul>
{% endblock content %}
```

Now let's add individual topics pages. Update the url pattern
`learning_log_app/urls.py`:
```python
path('topics/(<int:topic_id>/', views.topic, name='topic'),
```

Update the views `learning_log_app/views.py`:
```python
def
def topic(request, topic_id):
    """Show a single topic and all its entries."""
    topic = Topic.objects.get(id=topic_id)
    entries = topic.entry_set.order_by('-date_added')
    context = {'topic': topic, 'entries': entries}
    return render(request, 'learning_log_app/topic.html', context)
```

Create a new `learning_log_app/templates/learning_log_app/topic.html`:
```html
{% extends 'learning_log_app /base.html' %}
{% block content %}
  <p>Topic: {{ topic }}</p>
  <p>Entries:</p>
  <ul>
  {% for entry in entries %}
    <li>
    <p>{{ entry.date_added|date:'M d, Y H:i' }}</p> <p>{{ entry.text|linebreaks }}</p>
    </li>
  {% empty %}
    <li>
    <p>There are no entries for this topic yet.</p>
    </li>
  {% endfor %}
  </ul>
{% endblock content %}
```

Link the specific topic pages in our
`learning_log_app/templates/learning_log_app/topics.html`:
```html
<li>
<a href="{% url 'topic' topic.id %}">({{ topic.id }}) {{ topic }}</a>
</li>
```

Working in Djngo shell:
```bash
python3 manage.py shell
```

### Allow users to create entries
We can let users submit and edit topics and entries via `ModelForm`. Create a
forms file `learning_log_app/forms.py`:
```python
from django import forms
from .models import Topic

class TopicForm(forms.ModelForm):
    class Meta:
        model = Topic
        fields = ['text']
        labels = {'text': ''}
```
**URL for new Topics page:** Add following to our `learning_log_app/urls.py`:
```python
path('new_topic/', views.new_topic, name='new_topic'),
```

Update new_topic() in `learning_log_app/views.py`:
```python
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from learning_log_app.models import Topic
from learning_log_app.forms import TopicForm

def index(request):
    """The home page for Learning Log"""
    return render(request, 'learning_log_app/index.html')

def topics(request):
    """Show all topics."""
    topics = Topic.objects.order_by('date_added')
    context = {'topics': topics}
    return render(request, 'learning_log_app/topics.html', context)

def topic(request, topic_id):
    """Show a single topic and all its entries."""
    topic = Topic.objects.get(id=topic_id)
    entries = topic.entry_set.order_by('-date_added')
    context = {'topic': topic, 'entries': entries}
    return render(request, 'learning_log_app/topic.html', context)

def new_topic(request):
    """Add a new topic."""
    if request.method != 'POST':
        # No data submitted; create a blank form.
        form = TopicForm()
    else:
        # POST data submitted; process data.
        form = TopicForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('learning_log_app:topics'))

    context = {'form': form}
    return render(request, 'learning_log_app/new_topic.html', context)
```
