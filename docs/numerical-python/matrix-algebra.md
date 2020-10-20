### Linear algebra basics 

**Dot product:**  

```
>>> import numpy as np 
>>> x = np.array([3, 4, 1]); x
array([3, 4, 1]) 

>>> y = np.array([2, -3, 4]); y 
array([ 2, -3,  4])

>>> np.dot(x, y)
-2
``` 

Angle between two vectors: 

$$  \cos(\theta) = \frac{\bf{x} \cdot \bf{y}}{|\bf{x}| |\bf{y}|}  $$ 

```
>>> np.dot(x, y)/(np.linalg.norm(x) * np.linalg.norm(y))
-0.07283570407292297
``` 

**Matrix multiplication:** 

The inner dimensions of matrices must match for multiplication. The dimension or output matrix is the outer dimensions, e.g., a 2x3 multiplied with a 3x3 matrix will result in a 2x3 matrix. 

Matrix multiplication is not commutative (in general): $AB \neq BA$

```
>>> A = np.array([[1, -2, 1], [2, -4, 5]]); A
array([[ 1, -2,  1],
       [ 2, -4,  5]])

>>> B = np.array([[3, 4, 2], [1, -2, 0], [2, 1, -3]]); B 
array([[ 3,  4,  2],
       [ 1, -2,  0],
       [ 2,  1, -3]])

>>> np.matmul(A, B)
array([[  3,   9,  -1],
       [ 12,  21, -11]])
```

**Transpose:**  
$(AB)^T = B^T A^T$ 

```
>>> AT = A.transpose(); AT
array([[ 1,  2],
       [-2, -4],
       [ 1,  5]])

>>> (np.matmul(A, B)).transpose()
array([[  3,  12],
       [  9,  21],
       [ -1, -11]])

>>> np.matmul(B.transpose(), A.transpose())
array([[  3,  12],
       [  9,  21],
       [ -1, -11]])
```

If $u$, $v~\epsilon~\rm{R}^d$; $\bf{u} \cdot \bf{v} = u^Tv$ 
```
>>> u = np.array([3, 4, 1]); u 
array([3, 4, 1])

>>> v = np.array([1, 5, 3]); v
array([1, 5, 3])

>>> np.matmul(u.transpose(), v)
26

>>> np.dot(u, v)
26
```

$M$ is symmetric if $M = M^T$  
Diagonal matrices are symmetric. 

**Determinant:**  

For a 2x2 matrix $A = \begin{pmatrix}a & b\\ c & d \end{pmatrix}$, $det(A) = ad -bc$

For a diagonal matrix, det(A) is the product of diagonal elements. 

$det(AB) = det(A) det(B)$ 

```
>>> A = np.array([[1, 2, 4], [-2, 0, 3], [5, -1, -2]]); A
array([[ 1,  2,  4],
       [-2,  0,  3],
       [ 5, -1, -2]])

>>> np.linalg.det(A)
33.000000000000014
```

**Inverse:** 

B is inverse of A (A must be a square matrix) if $AB = BA = I$ 

$B = A^{-1}$ 

A matrix for which inverse does not exist is called singular matrix.  
A is invertible if and only if $|A| \neq 0$. 

```
>>> np.linalg.inv(A)
array([[ 9.09090909e-02, -2.22044605e-17,  1.81818182e-01],
       [ 3.33333333e-01, -6.66666667e-01, -3.33333333e-01],
       [ 6.06060606e-02,  3.33333333e-01,  1.21212121e-01]])
```
