---
title: Function plot
---
```python showLineNumbers
import matplotlib.pyplot as plt
import numpy as np
%matplotlib inline
plt.rcParams["figure.dpi"]=150
plt.rcParams["figure.facecolor"]="white"

# define the function
def f(t):
    return np.exp(-t) * np.cos(2*np.pi*t)

t = np.linspace(0, 5, 1000)

plt.plot(t, f(t), 'k')
plt.xlabel('$t$')
plt.ylabel('$f(t)$')
plt.axhline(linewidth=0.5, color="grey", linestyle="--")
plt.xlim(0, )
plt.show()
```

<picture>
  <source type="image/webp" srcset={require("/img/function-plot.webp").default} />
  <img src={require("/img/function-plot.png").default} alt="function-plot" />
</picture>
