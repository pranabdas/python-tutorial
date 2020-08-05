### Setting up Python 

If you are on macOS or Linux, chances are that you already have Python installed. You can open terminal, and type `python --version` or `python3 --version`. In this tutorial, we will use Python 3. 

If Python 3 is not installed in your machine, you can either go to official python website [https://www.python.org](https://www.python.org){:target="_blank"}, download and install manually. You can also install using a package manager (like apt-get, dnf, yum or brew). 

Another, alternative way is to install Anaconda - [https://www.anaconda.com/distribution/](https://www.anaconda.com/distribution/){:target="_blank"} This will install Python, along with other useful packages. Some packages, you might not even need. So while this is very handy, the installation will require more disk space. 

Finally, you may use an online service, like [Google Colab](https://colab.research.google.com){:target="_blank"} or [Microsoft Azure Notebook](http://notebooks.azure.com){:target="_blank"}. Both services require sign up, either a Google or Microsoft account is required depending on which service you choose. 

We will follow our learning using a Jupyter Notebook. If you have your Python setup ready in a local machine, please install Jupyter Notebook using pip. If you are using Anaconda, it is already there (Launch Anaconda Navigator > Jupyter Notebook). You can install issuing `pip install jupyter-notebook` or `pip3 install jupyter-notebook` You can launch, by typing `jupyter-notebook` in the Terminal. If you are on Windows, and Anaconda installed, you may use Conda prompt. If you run into trouble, please do a online research, there are plenty of resources around to get you going. 

You can download all the Notebooks used for this tutorial from my GitHub page [https://github.com/pranabdas/python-learning](https://github.com/pranabdas/python-learning){:target="_blank"}

We will use following packages: 
```
pip3 install jupyterlab
pip3 install numpy scipy
pip3 install matplotlib bokeh seaborn
pip3 install pandas geopandas xlrd openpyxl
pip3 install virtualenv
```

Check outdated pip packages:
```
pip list --outdated
```

Upgrade pip packages:
```
pip install <package-name> --upgrade
```
