### Django today app
Now let's create another app called **today**. It will tell us what date it is, what day it is and and greeting based on the time of the day. 

**Step 1:** Create our app:
```py 
django-admin startapp today
```

**Install the app** in our main Django project. Go to `myWebApp/settings.py` and include `today` in the installed app list. 

**Register the url:** Go to `myWebApp/urls.py` and include the following path:
```py
path('today/', include("today.urls")),
```

However, our `today.urls` does not exist yet. so create `today/urls.py` and put the following content: 
```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

**Create the views** Go to `today/views.py` and write the following index function:
```py
from django.shortcuts import render
import datetime

def index(request):
    """Today app index"""

    t = datetime.datetime.now()

    if (t.hour < 12):
        greet_message = "Good morning!"
    elif (t.hour < 18):
        greet_message = "Good afternoon!"
    elif (t.hour < 21):
        greet_message = "Good evening!"
    else:
        greet_message = "Good night!"

    date_message = "Today's date: " + str(t.day) + "/" + str(t.month) + "/" + \
            str(t.year)

    if (t.weekday == 1):
        day_message = "Today is Monday."
    elif (t.weekday == 2):
        day_message = "Today is Tuesday."
    elif (t.weekday == 3):
        day_message = "Today is Wednesday."
    elif (t.weekday == 4):
        day_message = "Today is Thursday."
    elif (t.weekday == 5):
        day_message = "Today is Friday."
    elif (t.weekday == 6):
        day_message = "Today is Saturday."
    else:
        day_message = "Today is Sunday."

    return render(request, "today/index.html", {
        "greet_message": greet_message,
        "date_message": date_message,
        "day_message": day_message
        })
```

**Create webpage:** Create the template directory and index page: 
```
mkdir -p today/templates/today
vi today/templates/today/index.html
```
Let's put following content:
```html
<html>
        < head>
                <title>Today app</title>
        < /head>
        <body>
                <p>{{ greet_message }}</p>
                <p>{{ date_message }}</p>
                <p>{{ day_message }}</p>
        </body>
</html>
```
Now we can runserver and visit <localhost:8000/today>
```py
python3 manage.py runserver
```
Now we get the idea. We can use any python logic to populate our html page. 

##### Handling static files
Let's say we want to style the webpage with css. Django convention is to create a directory: `today/static/today/` and put our `styles.css` there. 
```css
html {
        font-family: Arial, sans-serif;
        color: darkblue;
        text-align: center;
}

p {
        font-size: 2em;
}
```

Now let's go to our `today/templates/today/index.html`, load the static file and add the stylesheet in our head section:
```html
{% load static %}
<html>
        < head>
                <link rel="stylesheet" href={% static 'today/styles.css' %}>
                <title>Today app</title>
        < /head>
        <body>
                <p>{{ greet_message }}</p>
                <p>{{ date_message }}</p>
                <p>{{ day_message }}</p>
        </body>
</html>
```
