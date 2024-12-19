---
title: Curve fitting
---

```python showLineNumbers
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
plt.rcParams["figure.dpi"]=150
plt.rcParams["figure.facecolor"]="white"

# Generate our data
x = np.linspace(0, 5, num=100)
y = 2.5 * np.exp(0.5 * x) + np.random.rand(100)

# plot our data
plt.plot(x, y, '.')
plt.show()
```

<img src={require("/img/scipy-curve-fit-data.webp").default} alt="scipy-curve-fit-data" />

```python title="Input:" showLineNumbers
from scipy import optimize

def fit_func(x, a, b):
    return a * np.exp(b * x)

params, params_covariance = optimize.curve_fit(fit_func, x, y, p0=[1, 1])

print(params)
```
```python title="Output:"
[2.77004013 0.48224117]
```

The order of arguments for `curve_fit`: fitting function, independent variables,
dependent variable, initialization values for the coefficients (`p0`).

```python showLineNumbers
# plot both data and fit function
plt.plot(x, y, 'o', markersize='4', label='Data')
plt.plot(x, fit_func(x, params[0], params[1]), c = 'r', label='Fit')
plt.legend(frameon=False, loc="upper center")
plt.show()
```

<img src={require("/img/scipy-curve-fit.webp").default} alt="scipy-curve-fit" />
