---
title: Setup
slug: /
---
### Installing Python 3
If you use macOS (Big Sur, 11), you should have Python 3 already installed. You
can check whether Python 3 is installed in your system or not by typing
following in a terminal:
```bash
python3 --version
```
If python 3 is installed, it will print the version number, otherwise you will
see some sort of error.

If you use Ubuntu/Debian, you can install Python and pip (python package
manager) by:
```bash
sudo apt update
sudo apt install python3 python3-pip
```

If you use Windows, you can go to <https://www.python.org>, download and
install the latest version of Python 3.

### pip
We can install python packages using the `pip` package manager. To install a
specific package:
```bash
pip install <package-name>
pip install numpy
pip install scipy matplotlib  # install multiple packages
```

:::info

Note that in some operating systems, `pip` is referred as `pip3` specifically
for the version corresponding to Python 3.

:::


We can list outdated python packages by:
```bash
pip list --outdated
```

We can update outdated python packages by:
```bash
pip install --upgrade <package-name>
pip install --upgrade jupyterlab
```
:::note

The `--upgrade` flag can be used even if the package is not already installed,
it will install the latest version. If a package is installed and a newer
version is available, it will upgrade to the latest version.

:::

You can install a list of python packages from a [requirements.txt](
https://github.com/pranabdas/python-tutorial/blob/master/requirements.txt) file.
List each package name on separate line:
```python title="requirements.txt"
jupyterlab
numpy
scipy
matplotlib
```

Installing a list of packages from `requirements.txt`:
```bash
pip install --upgrade -r requirements.txt
```

### Installing Jupyterlab
Jupyter notebook is a convenient way to run and document your python code. We
can install Jupyterlab by issuing following command:
```bash
pip install jupyterlab
```

Now we can launch Jupyterlab by typing `jupyter-lab` in the terminal.


### virtualenv
`virtualenv` is a powerful way to manage dependencies in a python project. We
often need some python packages specific to a project. Therefore it is not a
good idea to install every python packages globally. Instead we can use
`virtualenv` and keep our specific python packages local to that specific
project. First we need to install `virtualenv` globally though:
```bash
pip install --upgrade virtualenv
```

Activate `virtualenv`:
```bash
cd my-project/
virtualenv venv
source venv/bin/activate
```

Now we can install dependencies using `pip`, and it will be stored inside the
`venv` directory.

To leave the `virtualenv` run:
```bash
deactivate
```

:::tip

Create a `requirements.txt` to list all required python packages for a project,
and include `venv` path in the `.gitigone`.

:::

### Docker
We can run our whole python setup inside a container, isolated from our main
operating system. First you need to install [docker](
https://docs.docker.com/get-docker/). Then we can build our container image
using [Dockerfile](
https://github.com/pranabdas/python-tutorial/blob/master/Dockerfile), you can
adjust according to your needs.
```dockerfile title="Dockerfile"
# Start from Ubuntu 20.04 LTS
FROM ubuntu:focal

# Update OS
RUN apt update && apt upgrade -y

# Install software packages
RUN apt install -y python3 python3-pip

# Install pip packages
RUN pip3 install jupyterlab numpy scipy matplotlib

# jupyter-lab settings
RUN mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
     echo "c.ServerApp.allow_root = True" && \
     echo "c.ServerApp.open_browser = False") \
        >> /etc/jupyter/jupyter_server_config.py

# leave in `/home` which we can map with the host
WORKDIR /home
```

Build the Docker image:
```bash
docker build -t jupyter .
```

Run Docker (you can either forward a specific port or if are using Linux, map
host network):
```bash
docker run -ti -p 8888:8888 -v ${PWD}:/home jupyter bash
docker run -ti --net=host -v /host/path:/home jupyter bash
```

Launch Jupyter notebook inside the container:
```bash
jupyter-lab
```

Now we can create a new python 3 notebook, and start writing our python code.
In order to properly close a notebook, save the notebook (either from *File*
menu or the save icon) → *Close and Shutdown the Notebook* (from *File* menu),
and finally shutdown the Jupyter server from the *File* menu → *Shut down*.
