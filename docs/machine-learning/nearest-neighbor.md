### Nearest neighbor classification 

**Resources:** The MNIST database of handwritten digits - [http://yann.lecun.com/exdb/mnist/](http://yann.lecun.com/exdb/mnist/){:target="_blank"}

In the MNIST dataset there are 60,000 images of handwritten digits with correct labels, which can be used as training set. There are also additional 10,000 images for test set. 

In the nearest neighbor classification, we decide the correct digit for a given image, by comparing the distance of given image with 60,000 training dataset, and choosing the closest image with its label. 

How do we define distance? 

Suppose all our images are MxN pixels (the MNIST images 28x28 pixels). We first convert the images to one dimensional vectors; we can just put the first row first, then second row and so on. The length of each vector is M*N. Now each pixel contains gray-scale intensity values [0, 255]. 

One choice could be the Euclidean distance: 

$|d|_2 = \sqrt{\sum_1^{M*N} (x_i - z_i)^2}$

Euclidean distance is a subset of broader class of $L_p$ distances: 

$$  |d|_p = \large(\sum_i |(x_i - z_i)|^p\large)^{1/p} $$ 

$L_{\infty}$ is defined as: $|x-z|_{\infty} = max_i |x_i - z_i|$ 
