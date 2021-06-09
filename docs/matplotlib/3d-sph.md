---
title: 3D spherical plots
---
Plotting spherical harmonics in 3D wireframe:

```python
import matplotlib.pyplot as plt
import numpy as np
from scipy.special import sph_harm
%matplotlib inline
plt.rcParams["figure.dpi"] = 150
plt.rcParams["figure.facecolor"]="white"
# plt.style.use('dark_background')
# plt.style.use('default')

m, l = 0, 0
phi = np.linspace(0, np.pi, 30)
theta = np.linspace(0, 2*np.pi, 45)
phi, theta = np.meshgrid(phi, theta)

r = sph_harm(m, l, theta, phi).real
x = np.abs(r) * np.sin(phi) * np.cos(theta)
y = np.abs(r) * np.sin(phi) * np.sin(theta)
z = np.abs(r) * np.cos(phi)

fig = plt.figure(figsize=(6, 6))
ax = plt.subplot(projection="3d")
ax.plot_surface(x, y, z, color='aqua', edgecolor='k')
plt.axis('off')
plt.show()
```

![spherical harmonics](/img/3d-sph-harm.png)

```python
m, l = 2, 3
phi = np.linspace(0, np.pi, 100)
theta = np.linspace(0, 2*np.pi, 100)
phi, theta = np.meshgrid(phi, theta)

func = sph_harm(m, l, theta, phi).real

x = np.abs(func) * np.sin(phi) * np.cos(theta)
y = np.abs(func) * np.sin(phi) * np.sin(theta)
z = np.abs(func) * np.cos(phi)

fig = plt.figure(figsize=(6, 6))
ax = plt.subplot(projection="3d")

surf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',
                       shade=False, edgecolor='k')
plt.axis('off')
plt.show()
```

![spherical harmonics](/img/3d-sph-harm-2.png)

```python
m, l = 2, 3
func = sph_harm(m, l, theta, phi).real
x = np.abs(func) * np.sin(phi) * np.cos(theta)
y = np.abs(func) * np.sin(phi) * np.sin(theta)
z = np.abs(func) * np.cos(phi)

fig = plt.figure(figsize=(12, 8))
ax = fig.add_subplot(2, 3, 6, projection='3d')
ax.set_title('l=3, m=2')
surf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',
                       shade=False, edgecolor='k')
plt.axis('off')

m, l = 1, 3
func = sph_harm(m, l, theta, phi).real
x = np.abs(func) * np.sin(phi) * np.cos(theta)
y = np.abs(func) * np.sin(phi) * np.sin(theta)
z = np.abs(func) * np.cos(phi)

ax = fig.add_subplot(2, 3, 5, projection='3d')
ax.set_title('l=3, m=1')
surf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',
                       shade=False, edgecolor='k')
plt.axis('off')

m, l = 0, 3
func = sph_harm(m, l, theta, phi).real
x = np.abs(func) * np.sin(phi) * np.cos(theta)
y = np.abs(func) * np.sin(phi) * np.sin(theta)
z = np.abs(func) * np.cos(phi)

ax = fig.add_subplot(2, 3, 4, projection='3d')
ax.set_title('l=3, m=0')
surf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',
                       shade=False, edgecolor='k')
plt.axis('off')


m, l = 1, 2
func = sph_harm(m, l, theta, phi).real
x = np.abs(func) * np.sin(phi) * np.cos(theta)
y = np.abs(func) * np.sin(phi) * np.sin(theta)
z = np.abs(func) * np.cos(phi)

ax = fig.add_subplot(2, 3, 3, projection='3d')
ax.set_title('l=2, m=1')
surf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',
                       shade=False, edgecolor='k')
plt.axis('off')

m, l = 0, 2
func = sph_harm(m, l, theta, phi).real
x = np.abs(func) * np.sin(phi) * np.cos(theta)
y = np.abs(func) * np.sin(phi) * np.sin(theta)
z = np.abs(func) * np.cos(phi)

ax = fig.add_subplot(2, 3, 2, projection='3d')
ax.set_title('l=2, m=0')
surf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',
                       shade=False, edgecolor='k')
plt.axis('off')

m, l = 0, 1
func = sph_harm(m, l, theta, phi).real
x = np.abs(func) * np.sin(phi) * np.cos(theta)
y = np.abs(func) * np.sin(phi) * np.sin(theta)
z = np.abs(func) * np.cos(phi)

ax = fig.add_subplot(2, 3, 1, projection='3d')
ax.set_title('l=1, m=0')
surf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',
                       shade=False, edgecolor='k')
plt.axis('off')
plt.tight_layout()
plt.show()
```

![spherical harmonics](/img/3d-sph-harm-3.png)

### Wrapping an image onto a sphere

```python
import numpy as np
import matplotlib.image as image
import matplotlib.pyplot as plt
import matplotlib.cm as cm
%matplotlib inline
plt.rcParams["figure.dpi"] = 150
plt.style.use('dark_background')
# plt.style.use('default')

earth = image.imread('../datafiles/earth_texture2048x1024.png')
xp, yp, __ = earth.shape

x = np.arange(0, xp, 1)
y = np.arange(0, yp, 1)
Y, X = np.meshgrid(y, x)

phi = np.linspace(0, 2 * np.pi, yp)
theta = np.linspace(0, np.pi, xp)
phigrid, thetagrid = np.meshgrid(phi, theta)

x = np.sin(thetagrid) * np.cos(phigrid)
y = np.sin(thetagrid) * np.sin(phigrid)
z = np.cos(thetagrid)

fig = plt.figure(figsize=(12,12))
ax = plt.subplot(projection='3d')
ax.dist=20
ax.view_init(elev=10, azim=60)

ax.plot_surface(x, y, z, facecolors=earth,
                rstride=4, cstride=4,
                antialiased=True, shade=False)

ax.set_xlim3d([-1.25, 1.25])
ax.set_ylim3d([-1.25, 1.25])
plt.axis('off')
plt.show()
```

![3D earth](/img/3d-earth.png)

Making series of images with different rotation view:
```python
fig = plt.figure(figsize=(12,12))
ax = fig.gca(projection='3d')
ax.dist=20

for azim in range(0, 360, 5):
    fig = plt.figure()
    ax = fig.gca(projection='3d')
    ax.plot_surface(x, y, z, facecolors=earth,
                rstride=4, cstride=4,
                antialiased=False, shade=False)

    ax.view_init(elev=10, azim=azim)

    filename = 'temp/earth'+ "{0:0=3d}".format(azim) + '.png'
    plt.axis('off')
    plt.savefig(filename, dpi=300, bbox_inches='tight', pad_inches=0)
    ax.set_xlim3d([-1.25, 1.25])
    ax.set_ylim3d([-1.25, 1.25])
    plt.gca()
    plt.clf()
```

Making a gif from multiple images:
```python
from PIL import Image
import glob

# Create the frames
frames = []
imgs = glob.glob("temp/*.png")
for i in imgs:
    new_frame = Image.open(i)
    frames.append(new_frame)

frames[0].save('earth.gif', format='GIF',
               append_images=frames[1:],
               save_all=True,
               duration=300, loop=0)
```
