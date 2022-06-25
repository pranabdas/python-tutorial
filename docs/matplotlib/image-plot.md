---
title: Image plot
---
Here we will read some two dimensional array data from web url.
```python showLineNumbers
import urllib
url = "https://pranabdas.github.io/drive/datasets/arpes/sample_spectrum.txt"
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url = url, headers = headers)
data = urllib.request.urlopen(req).read().decode()
```

Write a helper function to extract data:
```python showLineNumbers
def load_data(data) :
    import numpy as np
    contents = data.splitlines()
    energy_length = contents[7]
    start_string = contents[7].find("=") + 1
    end_string = len(contents[7])
    energy_length = int(contents[7][start_string : end_string])

    angle_length = contents[10]
    start_string = contents[10].find("=") + 1
    end_string = len(contents[10])
    angle_length = int(contents[10][start_string : end_string])

    angle = contents[11]
    start_string = contents[11].find("=") + 1
    end_string = len(contents[11])
    angle_temp = contents[11][start_string : end_string]

    angle = np.linspace(0, 0, angle_length)

    start_string = 0
    for ii in range(angle_length):
        end_string = angle_temp.find(" ", start_string)
        angle[ii] = float(angle_temp[start_string : end_string])
        start_string = end_string + 1

    energy = np.linspace(0, 0, energy_length)

    intensity = np.ndarray((energy_length, angle_length))

    for ii in range(energy_length):
        intensity_temp = contents[57 + ii]
        end_string = len(intensity_temp)
        intensity_temp = intensity_temp[1 : end_string]

        start_string = 0
        for jj in range(angle_length + 1):
            end_string = intensity_temp.find("  ", start_string)
            if jj == 0 :
                energy[ii] = float(intensity_temp[start_string : end_string])
                start_string = end_string + 1
            elif jj > 0 :
                intensity[ii][jj - 1] = float(intensity_temp[start_string : \
                         end_string])
                start_string = end_string + 1
    return energy, angle, intensity
```

```python showLineNumbers
import matplotlib.pyplot as plt
%matplotlib inline
plt.rcParams["figure.dpi"]=150
plt.rcParams["figure.facecolor"]="white"

energy, angle, spectra = load_data(data)

plt.imshow(spectra, origin = 'lower', aspect = 'auto')
plt.set_cmap('magma_r')
plt.show()
```

<picture>
  <source type="image/webp" srcSet={require("/img/image-plot.webp").default} />
  <img src={require("/img/image-plot.png").default} alt="image-plot" />
</picture>

With some customizations:
```python showLineNumbers
plt.imshow(spectra, origin = 'lower', aspect = 'auto', \
           extent = (angle[0], angle[-1], energy[0], energy[-1]))
plt.xlabel("$\\theta$ (deg)")
plt.ylabel('$E_{kin}$ (eV)')
plt.set_cmap('magma_r')
plt.show()
```

<picture>
  <source type="image/webp" srcSet={require("/img/image-plot-2.webp").default} />
  <img src={require("/img/image-plot-2.png").default} alt="image-plot-2" />
</picture>

### pcolormesh
There is also MATLAB style image plot function, which accepts $x$, $y$, and
$f(x,y)$ as inputs. Let us also set a different colormap style.
```python
plt.pcolormesh(angle, energy, spectra, cmap='jet', shading='auto')
plt.show()
```

<picture>
  <source type="image/webp" srcSet={require("/img/pcolormesh.webp").default} />
  <img src={require("/img/pcolormesh.png").default} alt="pcolormesh" />
</picture>
