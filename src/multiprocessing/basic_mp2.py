from multiprocessing import Pool
from functools import partial
from itertools import repeat
import numpy as np
from scipy import interpolate


input_array = np.random.rand(10, 100, 100)
x = range(100)
y = range(100)


def interp(data, x, y):
    xx = np.linspace(x[0], x[-1], len(x)*10)
    yy = np.linspace(y[0], y[-1], len(y)*10)
    x_grid, y_grid = np.meshgrid(xx, yy)

    func = interpolate.RectBivariateSpline(x, y, data)
    return func.ev(x_grid, y_grid)


def pool_handler():
    pool = Pool()
    result = pool.map(partial(interp, x=x, y=y), input_array)
    result = np.array(result)
    print(result.shape)
    print(result[2, 200, 200])


def pool_handler_alt():
    pool = Pool()
    input_array_tuple = zip(input_array, repeat(x), repeat(y))
    result = pool.starmap(interp, input_array_tuple)
    result = np.array(result)
    print(result.shape)
    print(result[2, 200, 200])


if __name__ == "__main__":
    pool_handler()
    pool_handler_alt()
