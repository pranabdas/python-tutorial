### Image plot 

First in order to make an image plot, we need a two-dimensional array of data. Here I will download and process some data to get my 2D array. You can get it from another source. 

```py 
import urllib
url = "https://data.mendeley.com/datasets/rfhhh54g9m/2/files/c3ef4285-ed19-447a-b7bf-effd94a62fbb/sample_spectrum.txt"
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url = url, headers = headers)
data = urllib.request.urlopen(req).read().decode()
``` 

Process the data to get two-dimensional array, as well as two one-dimensional vectors containing the scaling of the x- and y-dimension of the two-dimensional array. 

```py 
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

```py 
[energy, angle, spectra] = load_data(data)
``` 

Now let's plot our 2D array. 
```py 
import matplotlib.pyplot as plt 
%matplotlib inline 

plt.imshow(spectra)
plt.show()
```
![image-plot](../img/image-plot.png)

That's all we need to make a basic image plot. Now we can improve on this. Note that by default the origin is in the upper left. 

```py 
plt.figure(figsize = (8, 6))
plt.imshow(spectra, origin = 'lower', aspect = 'auto') 
plt.set_cmap('magma_r')
plt.show()
``` 
![image-plot-2](../img/image-plot-2.png) 

At this the point the x- and y-scales are the array indices, we need to set it to our actual energy and angle scales: 
```py 
plt.figure(figsize = (8, 6))
plt.imshow(spectra, origin = 'lower', aspect = 'auto', extent = (angle[0], angle[-1], energy[0], energy[-1]))
plt.xlabel("$\\theta$ (deg)")
plt.ylabel('$E_{kin}$ (eV)') 
plt.set_cmap('magma_r')
plt.show()
```
![image-plot-3](../img/image-plot-3.png) 

You can play with various customization, to make fonts, ticks and other visual improvements. 

#### pcolormesh  

There is also MATLAB style image plot function, which accepts $x$, $y$, and $f(x,y)$ as inputs. Let us also set a different colormap. 
```py
plt.pcolormesh(angle, energy, spectra, cmap='jet')
plt.show()
``` 
![pcolormesh](../img/pcolormesh.png) 
