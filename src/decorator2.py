def repeat_decorator(times):
    def wrapper(f):
        for _ in range(times):
            f()

    return wrapper


# when passing argument into a decorator, the function is automatically called
@repeat_decorator(5)
def print_welcome():
    print("Hello Python!")
