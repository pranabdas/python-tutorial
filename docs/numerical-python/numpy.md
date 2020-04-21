### Numerical operations using numpy 

First import numpy and create a simple array:
```python 
>>> import numpy as np
... my_array = np.array([1, 3, 4])
... print(my_array)

[1 3 4]

>>> type(my_array) 

numpy.ndarray
```

Create a two-dimensional array/matrix: 
```python
>>> my_array2 = np.array([[1, 2, 4], [3, 1, 5]])
... print(my_array2) 

[[1 2 4]
 [3 1 5]]
```

Check dimension of an array: 
```python
>>> my_array2.ndim 

2

>>> my_array2.shape 

(2, 3)

>>> my_array2.size

6

>>> my_array2.dtype

dtype('int64')
```

You can specify the dtype explicitly if you need to. 
```py
>>> my_array3 = np.array([[1, 4, 7], [1, 9, 32]], dtype=np.float)
... my_array3.dtype 

dtype('float64')
``` 

Or we can switch type after we create the array: 
```py
>>> my_array3.astype(np.int)

array([[ 1,  4,  7],
       [ 1,  9, 32]])

>>> my_array3.astype(np.float)

array([[ 1.,  4.,  7.],
       [ 1.,  9., 32.]])

``` 

There is another way: 
```py
>>> my_array3 = np.array(my_array3, dtype=np.int)
... print(my_array3)

[[ 1  4  7]
 [ 1  9 32]]


>>> my_array3 = np.array(my_array3, dtype=np.float)
... print(my_array3) 

[[ 1.  4.  7.]
 [ 1.  9. 32.]]
```

- Creating zero matrices: 
```py
>>> my_zero_array = np.zeros((2, 3))
... print(my_zero_array)

[[0. 0. 0.]
 [0. 0. 0.]]
```

- Matrix of ones: 
```py 
>>> my_ones_array = np.ones((2, 3))
... print(my_ones_array)

[[1. 1. 1.]
 [1. 1. 1.]]
```

- If we need to fill the matrix with some other constant, we can first create ones_matrix and multiply. However there is another function to do the same. 
```py 
>>> my_const_array = np.full([2, 3], 3.4)
... print(my_const_array)

[[3.4 3.4 3.4]
 [3.4 3.4 3.4]]
```

- Create arrays with incremental sequences.
```py 
>>> my_array4 = np.arange(1, 10, 1)
... print(my_array4)

[1 2 3 4 5 6 7 8 9]

>>> my_array5 = np.linspace(1, 10, 10)
... print(my_array5)

[ 1.  2.  3.  4.  5.  6.  7.  8.  9. 10.]
```

- Create meshgrid: 
```py
>>> x = np.array([-1, 0, 1])
... y = np.array([-2, 0, 2])
... X, Y = np.meshgrid(x, y)
... print(X, '\n\n', Y)

[[-1  0  1]
 [-1  0  1]
 [-1  0  1]] 

 [[-2 -2 -2]
 [ 0  0  0]
 [ 2  2  2]]
```

- Other useful matrix creation: 
```py 
>>> np.identity(4)

array([[1., 0., 0., 0.],
       [0., 1., 0., 0.],
       [0., 0., 1., 0.],
       [0., 0., 0., 1.]])

>>> np.eye(4)

array([[1., 0., 0., 0.],
       [0., 1., 0., 0.],
       [0., 0., 1., 0.],
       [0., 0., 0., 1.]]) 

>>> np.eye(4, k=1)

array([[0., 1., 0., 0.],
       [0., 0., 1., 0.],
       [0., 0., 0., 1.],
       [0., 0., 0., 0.]])

>>> np.eye(4, k=-1)

array([[0., 0., 0., 0.],
       [1., 0., 0., 0.],
       [0., 1., 0., 0.],
       [0., 0., 1., 0.]])

>>> np.diag(np.arange(0, 20, 5))

array([[ 0,  0,  0,  0],
       [ 0,  5,  0,  0],
       [ 0,  0, 10,  0],
       [ 0,  0,  0, 15]])
```

- Create random matrix: 
```py
>>> np.random.rand(3)

array([0.94387943, 0.29393203, 0.8492759 ])

>>> np.random.rand(2, 3)

array([[0.18586417, 0.42499373, 0.59146342],
       [0.43061312, 0.04468298, 0.21267794]])
```

- Normally distributed random numbers: 
```py
>>> my_array_10 = np.random.randn(5); my_array_10

array([ 0.55956033, -0.37623696,  1.78995147,  0.05591339, -0.43796257])
```

- Expand matrix with `numpy.tile()`
```py
>>> my_array_11 = np.array([[1, 3], [2, 5]]); my_array_11

array([[1, 3],
       [2, 5]])

>>> my_array_12 = np.tile(my_array_11, 2); my_array_12

array([[1, 3, 1, 3],
       [2, 5, 2, 5]])

>>> my_array_12 = np.tile(my_array_11, (3, 2)); my_array_12

array([[1, 3, 1, 3],
       [2, 5, 2, 5],
       [1, 3, 1, 3],
       [2, 5, 2, 5],
       [1, 3, 1, 3],
       [2, 5, 2, 5]])
```

- Indexing and slicing matrix: 
```py 
>>> my_array = np.arange(5); my_array

array([0, 1, 2, 3, 4])

>>> print(my_array[0], my_array[-1])

0 4
```

- Reversing an array: 
```py 
>>> my_array[::-1]

array([4, 3, 2, 1, 0])
``` 

- Indexing in higher dimensional array:
```py 
>>> my_array = np.array([[1, 3, 2], [1, 4, 2], [5, 3, 1]]); print(my_array)

[[1 3 2]
 [1 4 2]
 [5 3 1]]

>>> my_array[2, 1]

3

>>> my_array[0, 0]

1

>>> my_array[2]

array([5, 3, 1])

>>> my_array[2, :]

array([5, 3, 1])

>>> my_array[:, 2]

array([2, 2, 1])
```
