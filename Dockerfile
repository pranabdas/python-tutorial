# Build command  : docker build -t jupyter -f jupyter.dockerfile .
# Run docker     : docker run -ti -v ${PWD}:/home -p 8888:8888 jupyter bash
# Launch jupyter : jupyter-notebook
#                : notebook will be served at http://127.0.0.1:8888 on the host
#                : jupyter-notebook --ip 0.0.0.0 --port 9999

FROM ubuntu:focal

RUN apt update && apt upgrade -y

RUN apt install -y python3 python3-pip

# Install pip packages
RUN pip3 install jupyterlab \
    numpy \
    scipy \
    matplotlib \
    pandas \
    xlrd \
    openpyxl \
    seaborn \
    bokeh \
    geopandas \
    scikit-learn \
    missingno \
    ipywidgets

# jupyter-lab settings
RUN mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
    echo "c.ServerApp.allow_root = True" && \
    echo "c.ServerApp.open_browser = False") \
        >> /etc/jupyter/jupyter_server_config.py

# leave in `/home` which we can map with the host
WORKDIR /home
