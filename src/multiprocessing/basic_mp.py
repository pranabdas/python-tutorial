import os
import multiprocessing

number_of_processors = os.cpu_count()

print("Number of processor(s) = ", number_of_processors)


def square(x):
    return x * x


input_array = range(10)


if __name__ == "__main__":
    pool = multiprocessing.Pool()
    output_async = pool.map_async(square, input_array)
    output_array = output_async.get()

    print(output_array)
