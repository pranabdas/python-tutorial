def trapezoidal(f, N, a, b):
    h = (b-a)/N
    f_sum = 0

    for i in range(1, N, 1):
        x = a + i*h
        f_sum = f_sum + f(x)

    return h*(0.5*f(a) + f_sum + 0.5*f(b))


def calc_integration():
    from math import exp
    f = lambda t: 3*(t**2)*exp(t**3)

    I = lambda t: exp(t**3)
    exact = I(1) - I(0)

    for N in [10, 100, 1000, 10000]:
        numerical = trapezoidal(f, N, 0, 1)
        error = abs(exact - numerical) / exact
        print("n = {:6d}: {:.6f}, relative error: {:g}".format(
            N, numerical, error))


if __name__ == "__main__":
    calc_integration()
