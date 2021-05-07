---
title: Airline app
---
Here we will learn about databases.

Create our airline app:
```python
django-admin startapp flights
```

Include our new app to the `myWebApp/settings.py` `INSTALLED_APPS`.

Include the flights urls in `myWebApp/urls.py`.

Create `flights/urls.py`.

### Models
Open `flights/models.py`. Here we will define our models. Each model can access
a database table.
```python
from django.db import models

# Create your models here.

class Flights(models.Model):
    origin = models.CharField(max_length=64)
    destination = models.CharField(max_length=64)
    duration = models.IntegerField()

    def __str__(self):
        return f"{self.id}: {self.origin} to {self.destination}"

class Airports(models.Model):
    code = models.CharField(max_length=3)
    city = models.CharField(max_lenght=64)

    def __str__(self):
        return f"{self.city} ({self.code})"
```

Now we need to migrate to database:
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Django shell
```bash
python3 manage.py shell
```

Now we can play around in the django shell:
```python
from flights.models import Flights
f = Flight(origin="Singapore", destination="San Francisco", duration=960)
f.save()
Flights.objects.all()
```
