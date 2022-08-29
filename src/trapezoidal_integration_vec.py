'''
Demonstrates vectorized version is much much faster
result     =  1.7182818287988386
result_vec =  1.718281828798831
Time trapezoidal: 1.20168 seconds
Time vector     : 0.000733712 seconds
'''
import timeit
import numpy as np

def trapezoidal(f, N, a, b):
    h = (b-a)/N
    f_sum = 0

    for i in range(1, N, 1):
        x = a + i*h
        f_sum = f_sum + f(x)

    return h*(0.5*f(a) + f_sum + 0.5*f(b))


def trapezoidal_vec(f, N, a, b):
    h = (b-a)/N
    return h*(np.sum(f) - 0.5*f[0] - 0.5*f[-1])


f = lambda t: 3*(t**2)*np.exp(t**3)
N = 100000
x = np.linspace(0, 1, N+1)
f_vec = f(x)

result = trapezoidal(f, N, 0, 1)
result_vec = trapezoidal_vec(f_vec, N, 0, 1)

print("result     = ", result)
print("result_vec = ", result_vec)

t = timeit.Timer("trapezoidal(f, N, 0, 1)", \
    setup="from __main__ import trapezoidal, f, N")
time_trapezoidal = t.timeit(number=10) # calls the function 10 times
print("Time trapezoidal: {:g} seconds".format(time_trapezoidal))

t = timeit.Timer("trapezoidal_vec(f_vec, N, 0, 1)", \
    setup="from __main__ import trapezoidal_vec, f_vec, N")
time_vec = t.timeit(number=10)

print("Time vector     : {:g} seconds".format(time_vec))
