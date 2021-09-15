---
title: Global variables
---
The variables we declare inside a function are local to the function. It cannot
be used by another function. However, a global variable once declared/set, it
can be accessed by other functions. Here is an example: we will write a program
(equivalent of MATLAB `tic` and `toc` commands) that is combination of two
functions: **tic** which starts the timer and **toc** which stops the timer and
prints the time interval between calling `tic` and `toc` functions.

First let us write the tic program and set the current time as a global
variable:
```python
def tic():
    import time

    global tictoc_start_time
    tictoc_start_time = time.time()

    return
```

toc program that prints the elapsed time:
```python
def toc():
    import time

    if "tictoc_start_time" in globals():
        elapsed_time = time.time() - tictoc_start_time
        print("Elapsed time =", elapsed_time, "sec.")
    else:
        print("First run the tic() program, start time is not set.")
        elapsed_time = 0.0

    return elapsed_time
```

Of course, you should introduce global variables with care, as they might
conflict with other parts of the program.
