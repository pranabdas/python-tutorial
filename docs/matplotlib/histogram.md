### Histogram 

```py 
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
plt.rcParams["figure.figsize"] = (8, 6)

# generate 1000 random numbers from normal distribution 
data = np.random.randn(1000)

plt.hist(data, 20)  # number of bins = 20
plt.xlabel('x')
plt.ylabel('freq')
plt.show()
```

![histogram-plot](../img/histogram.png) 
