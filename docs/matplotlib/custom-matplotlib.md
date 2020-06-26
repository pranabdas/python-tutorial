### Customizing Matplotlib like your own 

You can customize every aspect of Matplotlib according to your needs and likes. If you want to apply certain set of styles universally, you can edit the *matplotlibrc* file. In macOS, the files resides in `/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/site-packages/matplotlib/mpl-data/matplotlibrc`. The path may differ depending on your installation type and operating system. You can edit the file there, but the problem is it will be overwritten if you upgrade matplotlib. To avoid overwriting, copy the file to `~/.matplotlib/matplotlibrc` and edit under your home directory. You can get a copy of sample *matplotlibrc* file here: [https://matplotlib.org/tutorials/introductory/customizing.html](https://matplotlib.org/tutorials/introductory/customizing.html#matplotlibrc-sample){:target='_blank'} 

Unfortunately, some settings are not correctly applied while using `%matplotlib inline`. List we need to apply in the Jupyter notebook:

```
plt.rcParams["figure.figsize"] = (8, 6)
plt.rcParams["figure.dpi"] = 150
```
