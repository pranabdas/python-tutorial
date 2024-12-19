---
title: Subplot with multiple panels
sidebar_label: Subplot
---
The following way we can incorporate multiple panels in a figure:

```python showLineNumbers
import matplotlib.pyplot as plt
import numpy as np
%matplotlib inline
plt.rcParams["figure.dpi"]=150
plt.rcParams["figure.facecolor"]="white"

x = np.linspace(-2*np.pi, 2*np.pi, 100)
y1 = np.sin(x)
y2 = (np.sin(x)/x)**2
y3 = np.tan(x)
y4 = np.exp(x)

fig = plt.figure(figsize = (10, 8))
plt.rcParams["axes.labelsize"] = 14
plt.rcParams["axes.titlesize"] = 14
plt.rcParams["xtick.labelsize"] = 14
plt.rcParams["ytick.labelsize"] = 14
plt.rcParams["legend.fontsize"] = 10
plt.rcParams["xtick.major.size"] = 4
plt.rcParams["ytick.major.size"] = 4

plt.subplot(221)  # plt.subplot(no_rows, no_cols, index)
plt.plot(x, y1)
plt.title('221')

plt.subplot(222)
plt.plot(x, y2)
plt.title('222')

plt.subplot(223)
plt.plot(x, y3)
plt.title('223')

plt.subplot(224)
plt.plot(x, y4)
plt.title('224')

plt.tight_layout()
plt.subplots_adjust(wspace = 0.25, hspace = 0.25)
fig.text(0.01, 1, "A", fontsize=16, weight='bold')
fig.text(0.51, 1, "B", fontsize=16, weight='bold')
fig.text(0.01, 0.5, "C", fontsize=16, weight='bold')
fig.text(0.51, 0.5, "D", fontsize=16, weight='bold')
# plt.savefig('layout1.pdf')
plt.show()
```

<img src={require("/img/subplot.webp").default} alt="subplot" />
