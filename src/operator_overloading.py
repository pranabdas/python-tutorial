class Complex():
    def __init__(self, re=0.0, im=0.0):
        self.re = re
        self.im = im

    def __str__(self):
        return f'{self.re}{self.im:+}i'

    def __eq__(self, other):
        return (self.re == other.re) and (self.im == other.im)

    def __ne__(self, other):
        return (self.re != other.re) or (self.im != other.im)

    def __add__(self, other):
        if isinstance(other, Complex):
            real = self.re + other.re
            imag = self.im + other.im

        return self.__class__(real, imag)

    def __sub__(self, other):
        if isinstance(other, Complex):
            real = self.re - other.re
            imag = self.im - other.im

        return self.__class__(real, imag)

    def __mul__(self, other):
        if isinstance(other, Complex):
            real = (self.re * other.re) - (self.im * other.im)
            imag = (self.re * other.im) + (self.im * other.re)

        return self.__class__(real, imag)

    def conj(self):
        return self.__class__(self.re, (-1)*self.im)


a = Complex(2, 3)
b = Complex(1, -1)

print("a =", a)
print("b =", b)
print("a + b =", a + b)
print("a - b =", a - b)
print("a * b =", a * b)

print("Conjugate of a =", a.conj())
print("Conjugate of b =", b.conj())

print("a == b ?", a == b)
