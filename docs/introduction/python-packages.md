### Installing and using various Python packages

One of most important aspect of python is that there are tons of open source packages freely available to achieve what you want to implement. Using python packages involve two steps: (1) install the package using a package manager, (2) import them in the beginning of your code. 

We can use python *pip* to install packages. Say we want to install a python package called *numpy*. This package has tons of functionality while doing numerical operations. So we run following command in the terminal: 
```
pip install numpy
```

However, depending on your system, you might need to issue `pip3` instead of `pip`. If you are using anaconda python distribution, chances are most common packages are already installed. 

Next, in order to use the packages in our code, we need to import them
```
import numpy as np
```

As `np` helps to use a shortened name later in the code to refer to `numpy`. 
