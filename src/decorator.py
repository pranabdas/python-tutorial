# below is a higher order function that takes another function as input and
# returns another function
def my_decorator(f):
    def wrapper():
        print("+++++++++++++++")
        f()
        print("+++++++++++++++")

    return wrapper


@my_decorator
def print_welcome():
    print("Hello Python!")


if __name__ == "__main__":
    print_welcome()
