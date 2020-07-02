### Integration 

Let's say, we want to perform the following integration: 

$$ I = \int_{0}^{\pi} sin(x) dx  $$ 

```py 
from scipy.integrate import quad 
import numpy as np 

# Define the function 
def integrand(x):
    return np.sin(x); 

I = quad(integrand, 0, np.pi); 
print(I); 

(2.0, 2.220446049250313e-14)
``` 

It returns the result and error bound. 
