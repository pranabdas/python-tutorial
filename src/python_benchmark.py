import numpy as np
import time

# Create two large random matrices
a = np.random.randn(10000, 10000)
b = np.random.randn(10000)

t1 = time.time()
# That's the expensive call:
result = np.linalg.solve(a, b)
print(time.time() - t1)

# Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz (2 cores) : 12 sec
# Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz (4 cores) : 6 sec
