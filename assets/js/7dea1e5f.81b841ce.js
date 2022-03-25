"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[1267],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=s(t),m=r,u=g["".concat(i,".").concat(m)]||g[m]||c[m]||o;return t?a.createElement(u,l(l({ref:n},d),{},{components:t})):a.createElement(u,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7755:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],p={title:"Learning log"},i=void 0,s={unversionedId:"django/learning-log",id:"django/learning-log",title:"Learning log",description:"Here we will see some more advanced features like admin account and databases.",source:"@site/docs/django/learning-log.md",sourceDirName:"django",slug:"/django/learning-log",permalink:"/python-tutorial/django/learning-log",editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/django/learning-log.md",tags:[],version:"current",frontMatter:{title:"Learning log"},sidebar:"docs",previous:{title:"Airline app",permalink:"/python-tutorial/django/airline"},next:{title:"Miscellaneous",permalink:"/python-tutorial/misc"}},d={},c=[{value:"Creating models",id:"creating-models",level:3},{value:"Activating models",id:"activating-models",level:3},{value:"Create superuser",id:"create-superuser",level:3},{value:"Creating pages",id:"creating-pages",level:3},{value:"Creating templates",id:"creating-templates",level:3},{value:"Allow users to create entries",id:"allow-users-to-create-entries",level:3}],g={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here we will see some more advanced features like admin account and databases."),(0,o.kt)("p",null,"Creating a Project in Django:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"django-admin.py startproject learning_log .\n")),(0,o.kt)("p",null,"Our project is called ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log"),"."),(0,o.kt)("p",null,"Creating a database for the project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 manage.py migrate\n")),(0,o.kt)("p",null,"Now you will see a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"db.sqlite3")," in the directory."),(0,o.kt)("p",null,"Viewing the Project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 manage.py runserver\n")),(0,o.kt)("p",null,"You can visit ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8000")," in your browser, and you should see a default\ndjango webpage. Django project is consists of a set of individual apps. This\nmodular approach helps to organize complex apps. In order to start an app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 manage.py startapp learning_log_app\n")),(0,o.kt)("p",null,"We call our app ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app"),". Check all the directory structure."),(0,o.kt)("h3",{id:"creating-models"},"Creating models"),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/models.py")," and define a model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Topic(models.Model):\n    """A topic the user is learning"""\n    text = models.CharField(max_length=200)\n    date_added = models.DateTimeField(auto_now_add=True)\n\n    def __str__(self):\n        """Return a string representation of the model"""\n        return self.text\n')),(0,o.kt)("p",null,"We can build as many models we want. We can define it by our requirements. Here\nwe are defining our Topic model based on the Django in-built ",(0,o.kt)("inlineCode",{parentName:"p"},"models.Model"),"."),(0,o.kt)("h3",{id:"activating-models"},"Activating models"),(0,o.kt)("p",null,"Once we have defined a model in our app, we have to include in our global django\nsettings. Open ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log/settings.py")," add ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app")," app to the list\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n\n    # My apps\n    'learning_log_app',\n]\n")),(0,o.kt)("p",null,"Make the migration to take changes effect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 manage.py makemigrations learning_log_app\npython3 manage.py migrate\n")),(0,o.kt)("h3",{id:"create-superuser"},"Create superuser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 manage.py createsuperuser\n")),(0,o.kt)("p",null,"Provide username and password."),(0,o.kt)("p",null,"Registering a model with the admin site: Open ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/admin.py")," and\nadd the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from learning_log_app.models import Topic\n\nadmin.site.register(Topic)\n")),(0,o.kt)("p",null,"Now we can start the server ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 manage.py runserver")," and login to\n",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8000/admin")," and create Topics."),(0,o.kt)("p",null,"Let's define another model for the Entry. Open ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/models.py")," and\ndefine a model for ",(0,o.kt)("em",{parentName:"p"},"Entry"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Entry(models.Model):\n    """Something specific learned about a topic"""\n    topic = models.ForeignKey(Topic, on_delete=models.DO_NOTHING,)\n    text = models.TextField()\n    date_added = models.DateTimeField(auto_now_add=True)\n\n    class Meta:\n        verbose_name_plural = \'entries\'\n    def __str__(self):\n        """Return a string representation of the model."""\n        return self.text[:50] + "..."\n')),(0,o.kt)("p",null,"Make changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/admin.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.contrib import admin\n\nfrom learning_log_app.models import Topic\nfrom learning_log_app.models import Entry\n\nadmin.site.register(Topic)\nadmin.site.register(Entry)\n")),(0,o.kt)("p",null,"Make migrations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"python3 manage.py makemigrations learning_log_app\npython3 manage.py migrate\n")),(0,o.kt)("p",null,"You can start server and check out the new changes."),(0,o.kt)("h3",{id:"creating-pages"},"Creating pages"),(0,o.kt)("p",null,"Creating pages has three steps: (1) Mapping URL, (2) Writing views, (3) Writing\ntemplates."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mapping URL:")," You have tell Django, what to look for when a url is requested.\nOpen ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log/urls.py")," and include the following. You will see that the\n",(0,o.kt)("inlineCode",{parentName:"p"},"admin/")," path is already registered when we created the admin account. Now we\nare including our home page (base url) will look for the urls in the\nlearning_log_app app urls."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('', include('learning_log_app.urls'))\n]\n")),(0,o.kt)("p",null,"Create an urls.py in the directory learning_log_app and include the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""This file includes the urls of our learning_log_app """\n\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path(\'\', views.index, name=\'index\'),\n]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Writing view:")," A view function takes the request and prepares a webpage to\nrender. Open ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/views.py")," and add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from django.shortcuts import render\n\ndef index(request):\n    """The home page for Learning Log"""\n    return render(request, \'learning_log_app/index.html\')\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Writing a template:")," We will store the templates in the following directory:\n",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/templates/learning_log_app"),". Create an\n",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/templates/learning_log_app/index.html"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n    <head>\n        <title>Learning log homepage</title>\n    </head>\n    <body>\n        <h3>Welcome to learning Log</h3>\n        <p>Here you can keep track of the topics you are learning.</p>\n    </body>\n</html>\n")),(0,o.kt)("p",null,"Note that in the above code block there is an extra space in ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," tags, please\nremove the spaces in your actual code (my website search function has some\nissues with the ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," tag, and I am using this workaround to counter the error\ncurrently). We can browse the homepage ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8000")," and see the index page."),(0,o.kt)("p",null,"Now that we know how to build a basic page, we will follow the same process to\nbuild a page to list our topics and another to show the entries for each topic."),(0,o.kt)("h3",{id:"creating-templates"},"Creating templates"),(0,o.kt)("p",null,"In almost all web project you will find, there are some contents that are shared\nby several other pages. Instead of hard coding those common elements, we can\nbuild templates. Let's create a template ",(0,o.kt)("inlineCode",{parentName:"p"},"base.html")," where we will include the\ntitle of the pages. Create a file\n",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/templates/learning_log_app/base.html")," and include our title\nhtml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n        <head>\n                <title>Learning log</title>\n        </head>\n        <body>\n                <h3><a href=\"{% url 'index' %}\">Learning log</a></h3>\n                {% block content %}{% endblock content %}\n        </body>\n</html>\n")),(0,o.kt)("p",null,"Now we will use this template to build other pages. Let's rewrite our\n",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/templates/learning_log_app/index.html")," using this template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'{% extends "learning_log_app/base.html" %}\n\n{% block content %}\n<p>Learning Log helps you keep track of your learning, for any topic you\'re learning about.</p>\n{% endblock content %}\n')),(0,o.kt)("p",null,"Let's create our Topics page. Register the url pattern in\n",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/urls.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"urlpatterns = [\n    url('', views.index, name='index'),\n\n    # Show all topics\n    url('topics/', views.topics, name='topics'),\n]\n")),(0,o.kt)("p",null,"Register the views in ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/view.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from learning_log_app.models import Topic\n\ndef topics(request):\n    \"\"\"Show all topics.\"\"\"\n    topics = Topic.objects.order_by('date_added')\n    context = {'topics': topics}\n    return render(request, 'learning_log_app/topics.html', context)\n")),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/templates/learning_log_app/topics.html")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'{% extends "learning_log_app/base.html" %}\n\n{% block content %}\n<h3>List of topics</h3>\n<ul>\n    {% for topic in topics %}\n        <li>{{ topic }}</li>\n    {% empty %}\n        <li>No topics have been added yet.</li>\n    {% endfor %}\n  </ul>\n{% endblock content %}\n')),(0,o.kt)("p",null,"Now let's add individual topics pages. Update the url pattern\n",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/urls.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"path('topics/(<int:topic_id>/', views.topic, name='topic'),\n")),(0,o.kt)("p",null,"Update the views ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/views.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def\ndef topic(request, topic_id):\n    \"\"\"Show a single topic and all its entries.\"\"\"\n    topic = Topic.objects.get(id=topic_id)\n    entries = topic.entry_set.order_by('-date_added')\n    context = {'topic': topic, 'entries': entries}\n    return render(request, 'learning_log_app/topic.html', context)\n")),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/templates/learning_log_app/topic.html"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"{% extends 'learning_log_app /base.html' %}\n{% block content %}\n  <p>Topic: {{ topic }}</p>\n  <p>Entries:</p>\n  <ul>\n  {% for entry in entries %}\n    <li>\n    <p>{{ entry.date_added|date:'M d, Y H:i' }}</p> <p>{{ entry.text|linebreaks }}</p>\n    </li>\n  {% empty %}\n    <li>\n    <p>There are no entries for this topic yet.</p>\n    </li>\n  {% endfor %}\n  </ul>\n{% endblock content %}\n")),(0,o.kt)("p",null,"Link the specific topic pages in our\n",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/templates/learning_log_app/topics.html"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<li>\n<a href=\"{% url 'topic' topic.id %}\">({{ topic.id }}) {{ topic }}</a>\n</li>\n")),(0,o.kt)("p",null,"Working in Djngo shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 manage.py shell\n")),(0,o.kt)("h3",{id:"allow-users-to-create-entries"},"Allow users to create entries"),(0,o.kt)("p",null,"We can let users submit and edit topics and entries via ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelForm"),". Create a\nforms file ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/forms.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django import forms\nfrom .models import Topic\n\nclass TopicForm(forms.ModelForm):\n    class Meta:\n        model = Topic\n        fields = ['text']\n        labels = {'text': ''}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL for new Topics page:")," Add following to our ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/urls.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"path('new_topic/', views.new_topic, name='new_topic'),\n")),(0,o.kt)("p",null,"Update new_topic() in ",(0,o.kt)("inlineCode",{parentName:"p"},"learning_log_app/views.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.shortcuts import render\nfrom django.http import HttpResponseRedirect\nfrom django.core.urlresolvers import reverse\nfrom learning_log_app.models import Topic\nfrom learning_log_app.forms import TopicForm\n\ndef index(request):\n    \"\"\"The home page for Learning Log\"\"\"\n    return render(request, 'learning_log_app/index.html')\n\ndef topics(request):\n    \"\"\"Show all topics.\"\"\"\n    topics = Topic.objects.order_by('date_added')\n    context = {'topics': topics}\n    return render(request, 'learning_log_app/topics.html', context)\n\ndef topic(request, topic_id):\n    \"\"\"Show a single topic and all its entries.\"\"\"\n    topic = Topic.objects.get(id=topic_id)\n    entries = topic.entry_set.order_by('-date_added')\n    context = {'topic': topic, 'entries': entries}\n    return render(request, 'learning_log_app/topic.html', context)\n\ndef new_topic(request):\n    \"\"\"Add a new topic.\"\"\"\n    if request.method != 'POST':\n        # No data submitted; create a blank form.\n        form = TopicForm()\n    else:\n        # POST data submitted; process data.\n        form = TopicForm(request.POST)\n        if form.is_valid():\n            form.save()\n            return HttpResponseRedirect(reverse('learning_log_app:topics'))\n\n    context = {'form': form}\n    return render(request, 'learning_log_app/new_topic.html', context)\n")))}m.isMDXComponent=!0}}]);