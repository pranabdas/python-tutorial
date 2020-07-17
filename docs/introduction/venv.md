### Virtual environment 

Virtualenv lets you create an isolated Python environment for your project. It stores all the dependencies and even it's version of python. 

Installation: 
```py
pip3 install virtualenv
```

Activation:
```py
cd my-project/
virtualenv venv
source venv/bin/activate
```

Now you can install dependencies using `pip`, and it will be stored inside a `venv` directory. 

To leave the virtual environment run:
```py
deactivate
```

**Tip:** Include `venv` path in your `.gitigone`. 
