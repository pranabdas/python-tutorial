---
title: Basic matplotlib plotting
sidebar_label: Basic plotting
---
`matplotlib` is a python graphical package to perform simple and advanced visual
presentation.

```python
import matplotlib.pyplot as plt
import numpy as np
# In Jupyter notebook to show figure inline
%matplotlib inline
# You can try %matplotlib notebook

# some plot configuration
plt.rcParams["figure.dpi"]=150
plt.rcParams["figure.facecolor"]="white"

# Let's create two one dimensional array using numpy
x = np.linspace(0, 10, 11)
y = x**2

# make a x vs. y plot
plt.plot(x, y)
plt.show()
```

This produces following output:
![x vs. y plot](../../static/img/mpl-x-vs-y.png)

Now let's improve the figure a bit. The plt.plot accepts 3 basic arguments in
the following order: (x, y, format). This format is a short hand combination of
`{color}{marker}{line}`.
```python
plt.plot(x, y, 'ro-')
plt.show()
```
![x vs. y plot](../../static/img/mpl-x-vs-y-2.png)

More customizations:
```python
plt.figure(figsize = (8, 5))
plt.plot(x, y, 'ro-', linewidth=1, markersize=3)
plt.title('My simple plot')
plt.xlabel('X')
plt.ylabel('Y')
plt.show()
```

Even more options:
```python
large = 22; med = 16; small = 12
params = {'axes.titlesize': large,
          'legend.fontsize': med,
          'figure.figsize': (16, 10),
          'axes.labelsize': med,
          'axes.titlesize': med,
          'xtick.labelsize': med,
          'ytick.labelsize': med,
          'figure.titlesize': large}
plt.rcParams.update(params)

plt.figure(figsize = (8, 6), dpi = 300)
plt.plot(x, y, 'ro-')
plt.title('My simple plot')
plt.xlabel('X')
plt.ylabel('Y')
plt.xlim(0, 10.5)
plt.ylim(0, 110)
plt.show()
```
:::note

Notice that once we update the `rcParams`, the settings persists until we
restart the kernel. You can go back to matplotlib defaults by:
`plt.rcParams.update(rcParamsDefault)`

:::

How can we append another plot on the same figure?
```python
y2 = x**3
plt.plot(x, y, 'ro-', label='y')
plt.plot(x, y2, 'g*-', label='y2')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend(frameon=False, loc="upper center")
plt.xlim(1, 10.5)
plt.ylim(1, 1200)
plt.show()
```
![x vs. y plot](../../static/img/mpl-x-vs-y-3.png)

### Saving plot to file
```python
x = np.linspace(0, 2*np.pi, 100)
y = np.sin(x)
plt.plot(x, y)
plt.savefig('fig1.pdf')
plt.show()
```

Now visit <https://matplotlib.org> and explore yourself.
