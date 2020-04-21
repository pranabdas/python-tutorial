### Simple functions 

Defining a function: 
```
def greeting(): 
    name = "Pranab Das"
    print("Good morning " + name)
```

Later calling the function to print the greeting: 
```
>>> greeting()
Good morning Pranab Das
```

Function with argument: 
```
def greeting_new(name):
    print("Good morning", name)

>>> greeting_new("Pranab")
Good morning Pranab
```

Some mathematical operations: 
```
def add_two_numbers(input_1, input_2): 
    result = input_1 + input_2;
    return result;

>>> add_two_numbers(23, 43)
66
```

**Very Important:** In Python, the code indentation is very important. Unlike other languages, where a code block level is organized by `{}`, in python the block level is determined by indentation (4 spaces for each level. 
