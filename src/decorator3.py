def bday_decorator(f):
    def wrapper(name, age):
        f(name, age+1)

    return wrapper


@bday_decorator
def print_message(name, age):
    print("Happy b'day", name)
    if age < 2:
        print("Enjoy your 1st b'day.")
    elif age < 3:
        print("Enjoy your 2nd b'day.")
    elif age < 4:
        print("Enjoy your 3rd b'day.")
    else:
        print("Enjoy your {}th b'day".format(age))


if __name__ == "__main__":
    print_message("Python", 31)
