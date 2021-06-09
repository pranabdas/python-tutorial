---
title: Inset zoom
---
```python
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline
plt.rcParams["figure.dpi"] = 150
plt.rcParams["figure.facecolor"]="white"

x = np.linspace(1, 10, num=1000)
y = x**2 + np.sin(100/x**2)

fig, ax = plt.subplots()
ax.plot(x, y)
axins = ax.inset_axes([0.15, 0.4, 0.4, 0.5])
axins.plot(x[:400], y[:400])
ax.indicate_inset_zoom(axins, linewidth=1)
axins.set_xticklabels('')
axins.set_yticklabels('')
plt.show()
```

![inset zoom](/img/inset-zoom.png)
