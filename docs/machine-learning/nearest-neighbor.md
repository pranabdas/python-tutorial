### Nearest neighbor classification 

In order to find the nearest neighbors, we need the notion of distance. We are familiar with the simple case of points in a two dimensional Euclidean plane, we may consider the Euclidean distance $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ to find the nearest neighbors. This idea can be extended to higher dimensions, and to quantities beyond spatial coordinates. Our distance function can be other than Euclidean distance. For example, we can use the nearest neighbor algorithm to classify handwritten digits to the numbers they represent. So how do we treat an image data and find its distance from another image? One idea could be to convert image data to one dimensional vectors. Suppose all our images are MxN pixels. We first convert the images to one dimensional vectors; we can just put the first row first, then second row and so on. The length of each vector is M*N. Now each pixel contains gray-scale intensity values [0, 255]. Now we can simply find the Euclidean distance between two images: 

$|d|_2 = \sqrt{\sum_1^{M*N} (x_i - z_i)^2}$

Is Euclidean distance correct choice in this case? Certainly not so obvious. Are there other distance functions that can give us more accurate predictions? That's the subject of this field. 

It is non-parametric method, and often suitable for problems where the decision boundary is irregular. 

**Resources:** The MNIST database of handwritten digits - [http://yann.lecun.com/exdb/mnist/](http://yann.lecun.com/exdb/mnist/){:target="_blank"}

In the MNIST dataset there are 60,000 images of handwritten digits with correct labels, which can be used as training set. There are also additional 10,000 images for test set. 

In the nearest neighbor classification, we decide the correct digit for a given image, by comparing the distance of given image with 60,000 training dataset, and choosing the closest image with its label. 

Euclidean distance is a subset of broader class of $L_p$ distances: 

$$  |d|_p = \large(\sum_i |(x_i - z_i)|^p\large)^{1/p} $$ 

$L_{\infty}$ is defined as: $|x-z|_{\infty} = max_i |x_i - z_i|$ 

#### K-Nearest Neighbors (KNN)

K represents the number of nearest neighbors. If K=1, it becomes nearest neighbor algorithm. The distance in KNN could be chosen among Euclidean, Hamming, Manhattan, Minkowski etc. 

KNN performs better with a low number of features. We need to perform principal component analysis or feature selection before applying KNN. Increase in dimension requires exponential increase in data points. 
