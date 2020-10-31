### Setting up Python 

If you are on macOS or Linux, chances are that you already have Python installed. You can open terminal, and type `python --version` or `python3 --version`. In this tutorial, we will use Python 3. 

If Python 3 is not installed in your machine, you can either go to official python website [https://www.python.org](https://www.python.org){:target="_blank"}, download and install manually. You can also install using a package manager (like apt, dnf or brew). 
```
sudo apt install python3 python3-pip
```

Another, alternative way is to install Anaconda - [https://www.anaconda.com/distribution/](https://www.anaconda.com/distribution/){:target="_blank"} This will install Python, along with other useful packages. Some packages, you might not even need. So while this is very handy, the installation will require more disk space. 

Finally, you may use an online service, like [Google Colab](https://colab.research.google.com){:target="_blank"} or [Microsoft Azure Notebook](http://notebooks.azure.com){:target="_blank"}. Both services require sign up and either a Google or Microsoft account is required depending on which service you choose. 

We will write our codes in this tutorial on an interactive Jupyter Notebook. If you have your Python setup ready in a local machine, please install Jupyter Notebook using pip. If you are using Anaconda, it is already there (Launch Anaconda Navigator > Jupyter Notebook). You can install issuing 
```
pip3 install jupyterlab
``` 

You may see a warning message, saying that the executable is placed in a directory that is not in `$PATH`. In that case you can include that path in your `.bashrc`. In Ubuntu: 
```
export PATH="/home/<username>/.local/bin:$PATH"
``` 

You can launch, by typing `jupyter-notebook` in the Terminal. If you are on Windows, and Anaconda installed, you may use Conda prompt. If you run into trouble, please do a online research, there are plenty of resources around to get you going. 

You can download all the Notebooks used for this tutorial from my GitHub page [https://github.com/pranabdas/python-learning](https://github.com/pranabdas/python-learning){:target="_blank"}

We will use following packages: 
```
pip3 install jupyterlab
pip3 install numpy scipy
pip3 install matplotlib bokeh seaborn
pip3 install pandas geopandas xlrd openpyxl
pip3 install virtualenv
```
**How to update pip packages:** 

Check outdated pip packages:
```
pip list --outdated
```

Upgrade pip packages:
```
pip install <package-name> --upgrade
```

**Python development inside Docker container:** 

An alternative setup option is to run your python development inside a docker container. Here is a sample [Dockerfile](https://github.com/pranabdas/python-learning/blob/master/Dockerfile): 

```dockerfile
# Start from Ubuntu 20.04 LTS
FROM ubuntu:focal

# Update OS
RUN apt update && apt upgrade -y

# Install software packages 
RUN apt install -y python3 python3-pip fonts-open-sans

# Install pip packages 
RUN pip3 install jupyterlab numpy scipy matplotlib pandas xlrd openpyxl \
seaborn scikit-learn

# bashrc settings
RUN echo 'alias jupyter-notebook="jupyter-notebook --allow-root --no-browser"' \
>> $HOME/.bashrc

# leave in `/home` which we can map with the host
WORKDIR /home
```

Build the docker image: 
```
docker build -t pydev .
```

Run docker with port forwarding and host directory mapping:
```
docker run -ti -p 8888:8888 -v ${pwd}:/home pydev bash
```

Launch Jupyter kernel: 
```
jupyter-notebook --ip 0.0.0.0
```
