### Building webapp using django 

First of make sure you have `virtualenv` [installed](../introduction/venv.md). Create a new project directory, and activate `venv`:
```py
mkdir django-project
cd django-project
virtualenv venv
source venv/bin/activate
```

Now we should be in virtual environment, you should see `venv>` prompt in the Terminal. Let's install `django` under the venv. 
```py
pip3 install django
```

- Creating a Project in Django: 
```py
django-admin.py startproject learning_log .
```
Our project is called `learning_log`. 

- Creating a database for the project:
```py
python3 manage.py migrate
```
Now you will see a new file called `db.sqlite3` in the directory.

- Viewing the Project:
```py
python3 manage.py runserver
```
You can visit `localhost:8000` in your browser, and you should see a default django webpage. Django project is consists of a set of individual apps. In order to start an app: 
```
python3 manage.py startapp learning_logs
```
We call our app `learning_logs`. Check all the directory structure. 

##### Creating models
Open `learning_logs/models.py` and define a model:
```py
class Topic(models.Model):
    """A topoic the user is learning about."""
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """Return a string representation of the model"""
        return self.text
```

##### Activating models

Open `learning_log/settings.py` add `learning_logs` app to the list of `INSTALLED_APPS` list:
```py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # My apps
    'learning_logs',
]
```

- Make the migration to take changes effect:
```py
python3 manage.py makemigrations learning_logs
python3 manage.py migrate
```

##### Create superuser
```py
python3 manage.py createsuperuser
```
Provide username and password. 

- Registering a model with the admin site: Open `learning_logs/admin.py` and add the following:
```py 
from learning_logs.models import Topic

admin.site.register(Topic)
```

Now we can start the server `python3 manage.py runserver` and login to `localhost:8000/admin` and create Topics. 

Let's define another model for the Entry. Open `learning_logs/models.py` and define a model for *Entry*. 
```py
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

Make changes to the `learning_logs/admin.py`: 
```py
from django.contrib import admin

from learning_logs.models import Topic
from learning_logs.models import Entry

admin.site.register(Topic)
admin.site.register(Entry)
```

Make migrations: 
```py
python3 manage.py makemigrations learning_logs
python3 manage.py migrate
```
You can start server and check out the new changes. 

##### Creating pages
Creating pages has three steps: (1) Mapping URL, (2) Writing views, (3) Writing templates. 

**Mapping URL:** Open `learning_log/urls.py` and include the following:
```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('learning_logs.urls'))
]
```

Create another urls.py in the directory learning_logs and include the following:
```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

Open `learning_logs/views.py` and add the following:
```py
from django.shortcuts import render

 def index(request):
     """The home page for Learning Log"""
     return render(request, 'learning_logs/index.html')
```

We will store the templates in the following directory: `learning_logs/templates/learning_logs`. Create an `learning_logs/templates/learning_logs/index.html`:
```html
<html>
    < head>
        <title>Learning log</title>
        <body>
            <h3>Learning Log</h3>
            <p>Learning Log helps you keep track of your learning, for any topic you're learning about.</p>
        </body>
    < /head>
</html>
```

Notice that there is an extra space in the `head` tags, please remove the spaces in your code (my website search function has some issues with the `head` tag, and I am using this workaround to counter the error currently). We can browse the homepage `localhost:8000` and see the index page. 
