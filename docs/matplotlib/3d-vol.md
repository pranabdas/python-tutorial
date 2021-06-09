---
title: 3D volume plots
---
Visualizing 3D slices:
```python
import numpy as np
import matplotlib.image as image
import matplotlib.pyplot as plt
import matplotlib.cm as cm
import sys
sys.path.append("/root/")
# https://github.com/pranabdas/arpespythontools
import arpespythontools as arp
%matplotlib inline
plt.rcParams["figure.dpi"] = 300
plt.style.use('dark_background')
# plt.style.use('default')

data, x, y = arp.import_itx('../datafiles/FS.itx')
data_0p1, x, y = arp.import_itx('../datafiles/FS-0p1.itx')
data_0p2, x, y = arp.import_itx('../datafiles/FS-0p2.itx')
data_0p3, x, y = arp.import_itx('../datafiles/FS-0p3.itx')
data_0p4, x, y = arp.import_itx('../datafiles/FS-0p4.itx')

data = data[150:350, :]
data_0p1 = data_0p1[150:350, :]
data_0p2 = data_0p2[150:350, :]
data_0p3 = data_0p3[150:350, :]
data_0p4 = data_0p4[150:350, :]

data[np.isnan(data)] = 0
data_0p1[np.isnan(data_0p1)] = 0
data_0p2[np.isnan(data_0p2)] = 0
data_0p3[np.isnan(data_0p3)] = 0
data_0p4[np.isnan(data_0p4)] = 0

xp, yp = data.shape
x = np.arange(0, xp, 1)
y = np.arange(0, yp, 1)
Y, X = np.meshgrid(y, x)

fig = plt.figure(figsize=(12, 12))
ax = plt.subplot(projection='3d')

ax.dist=20
ax.view_init(elev=30, azim=40)

cm_style = cm.get_cmap('afmhot')
# normed_data = (data - np.min(data)) / (np.max(data) - np.min(data))
normed_data = data / np.max(data)
normed_data_0p1 = data_0p1 / np.max(data_0p1)
normed_data_0p2 = data_0p2 / np.max(data_0p2)
normed_data_0p3 = data_0p3 / np.max(data_0p3)
normed_data_0p4 = data_0p4 / np.max(data_0p4)

mapped_data = cm_style(normed_data)
mapped_data_0p1 = cm_style(normed_data_0p1)
mapped_data_0p2 = cm_style(normed_data_0p2)
mapped_data_0p3 = cm_style(normed_data_0p3)
mapped_data_0p4 = cm_style(normed_data_0p4)

# a_thresold = 0.075

# transparent = data/np.max(data) < a_thresold
# mapped_data[:, :, 3][transparent] = 0
# transparent = data_0p1/np.max(data_0p1) < a_thresold
# mapped_data_0p1[:, :, 3][transparent] = 0
# transparent = data_0p2/np.max(data_0p2) < a_thresold
# mapped_data_0p2[:, :, 3][transparent] = 0
# transparent = data_0p3/np.max(data_0p3) < a_thresold
# mapped_data_0p3[:, :, 3][transparent] = 0
# transparent = data_0p4/np.max(data_0p4) < a_thresold
# mapped_data_0p4[:, :, 3][transparent] = 0

ax.plot_surface(X, Y, X - X + 0, facecolors=mapped_data,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot_surface(X, Y, X - X - 100, facecolors=mapped_data_0p1,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot_surface(X, Y, X - X - 200, facecolors=mapped_data_0p2,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot_surface(X, Y, X - X - 300, facecolors=mapped_data_0p3,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot_surface(X, Y, X - X - 400, facecolors=mapped_data_0p4,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

# ax.plot([xp/2, xp/2], [yp/2, yp/2], [0, -400], linewidth=0.5, c='orange')
# ax.plot([xp/2, xp/2], [yp/2+10, yp/2], [0, -300], linewidth=0.5, c='orange')
# ax.plot([xp/2, xp/2], [yp/2-10, yp/2], [0, -300], linewidth=0.5, c='orange')

ax.set_xlim3d([-50, 580])
ax.set_ylim3d([-30, 80])
# ax.text(250, 55, 50, 'FS')
# ax.text(250, 55, -40, 'FS - 0.1 eV')
# ax.text(250, 55, -140, 'FS - 0.2 eV')
# ax.text(250, 55, -240, 'FS - 0.3 eV')
# ax.text(250, 55, -330, 'FS - 0.4 eV')
plt.axis('off')
plt.show()
```

![3d slices](/img/3d-slices.png)

3D Volume plot:

```python
FS, x, y = arp.import_itx('../datafiles/FS.itx')
GX, x, y = arp.import_itx('../datafiles/GX.itx')
GY, x, y = arp.import_itx('../datafiles/GY.itx')
FS[np.isnan(FS)] = 0

FS_back = FS[150:403, 16:30]
FS_front = FS[150:252, 0:16]
GX = GX[0:168, 252:403].T
GY = GY[0:168, 0:16].T

xp, yp = FS_back.shape
xp2, yp2 = FS_front.shape
xp3, zp3 = GX.shape
yp4, zp4 = GY.shape

# masks
xp5, zp5 = xp2, zp3
yp6, zp6 = yp, zp3

x = np.arange(0, xp, 1)
y = np.arange(0, yp, 1)
Y, X = np.meshgrid(y, x)

x = np.arange(0, xp2, 1)
y = np.arange(-yp, -yp+yp2, 1)
Y2, X2 = np.meshgrid(y, x)

x = np.arange(xp-xp3, xp, 1)
z = -np.arange(0, zp3, 1)
Z3, X3 = np.meshgrid(z, x)

y = np.arange(yp, yp+yp4, 1)
z = -np.arange(0, zp4, 1)
Z4, Y4 = np.meshgrid(z, y)

x = np.arange(0, xp5, 1)
z = -np.arange(0, zp5, 1)
Z5, X5 = np.meshgrid(z, x)
M_front = np.zeros([xp5, zp5])
M_front[0, 0] = 1

y = np.arange(0, yp6, 1)
z = -np.arange(0, zp6, 1)
Z6, Y6 = np.meshgrid(z, y)
M_right = np.zeros([yp6, zp6])
M_right[0, 0] = 1

plt.style.use('default')
fig = plt.figure(figsize=(12, 12))
ax = plt.subplot(projection='3d')

ax.dist=20
ax.view_init(elev=30, azim=-55)

cm_style = cm.get_cmap('plasma')

normed_FS_back = FS_back / np.max(FS_back)
mapped_FS_back = cm_style(normed_FS_back)

normed_FS_front = FS_front / np.max(FS_front)
mapped_FS_front = cm_style(normed_FS_front)

normed_GX = GX / np.max(GX)
mapped_GX = cm_style(normed_GX*4)

normed_GY = GY / np.max(GY)
mapped_GY = cm_style(normed_GY*3)

mapped_M_front = cm_style(M_front)
mapped_M_right = cm_style(M_right)

ax.plot_surface(X, Y, X - X + 0, facecolors=mapped_FS_back,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot_surface(X2, Y2, X2 - X2 + 0, facecolors=mapped_FS_front,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot_surface(X3, Z3-Z3, -Z3 -zp3, facecolors=mapped_GX,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot_surface(Z4-Z4+xp2, Y4-2*yp, -Z4-zp4, facecolors=mapped_GY,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot_surface(X5, Z5-Z5-yp, -Z5 -zp5, facecolors=mapped_M_front,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot_surface(Z6-Z6+xp, Y6, -Z6-zp6, facecolors=mapped_M_right,
                rstride=1, cstride=1,
                antialiased=False, shade=False)

ax.plot([xp2, xp2+(xp-xp2)/2-1, xp, xp2, xp2, xp, xp, xp, xp, xp, xp], \
        [0, 0, 0, -yp2/2+1, -yp2+2, yp-1, yp/2, yp-1, yp-1, yp-1, yp-1], \
        [-zp3, -zp3, -zp3, -zp3, -zp3, -zp3, -zp3, -zp3*0.25, -zp3*0.50, -zp3*0.75, 0], \
        'o', c='r', markersize= 3)

ax.set_ylim3d([-22, 22])
ax.set_zlim3d([-250, 50])
plt.axis('off')
plt.show()
```

![3d volume plot](/img/3d-vol.png)
