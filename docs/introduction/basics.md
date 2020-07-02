### The Basics 

Launch a Jupyter Notebook and follow along: 

First we will print something, say "Hello Python!" 
```
>>> print("Hello Python!") 
Hello Python 
```

Let's assign some values to variables and perform some arithmetic operations. Variable names can not start with a numbers that will result in syntax error.  
```
>>> a = 4; 
>>> b = 7; 
>>> a + b 
11 
>>> a * b 
28 
``` 

We can use "#" to comment in our codes. The line starts with "#" are ignored by the program. 
```
>>> # Make subtraction 
... b - a
3
``` 

In Python, strings are assigned using either single or double quotes: 
```
>>> my_message = "Hello Students!" 
>>> new_message = "How are you doing?"
>>> print(my_message)
Hello Students!
>>> print(new_message)
How are you doing?
``` 

In Python, we do not need to specify the data types whether it is an integer or float or string. We just simply assign them. You can re-assign a different data type to the same variable.  
``` 
number_of_students = 35 
temperature = 36.9 
city = "Singapore" 
``` 

Sometime we read data from the file, and we do not know the data type beforehand. But we might need to know the data type before we can use them. We can use python data `type()` function to find that. 
```
>>> type(number_of_student)
int 
>>> type(temperature) 
float 
>>> type(city)
str 
``` 

The addition (+) in Python can do two things. If it operates on integer/float, it performs the arithmetic operation. It can also join/concatenate strings. 
``` 
>>> 45 + 8 
53 
>>> fist_name = "Pranab" 
>>> last_name = "Das" 
>>> print(fist_name + " " + last_name) 
Pranab Das 
``` 

Multiplication works the same way: 
``` 
>>> 3 * 6 
18 
>>> "rain! " * 3
'rain! rain! rain! '
``` 

However, you can not mix data type in the same operation. You will get a type error. 
```
>>> "Singapore" + 35.7
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-19-57ecfa136088> in <module>
----> 1 "Singapore" + 35.7

TypeError: can only concatenate str (not "float") to str
``` 

You can use a `str()` function to convert `int` to `str`. 
```
>>> "Singapore" + str(35.7) 
'Singapore35.7'
```

When writing Python code, it is not necessary to end the line with ";". However, it is a good practice for code readability. 

Get data from the user using `input()` function: 
```
>>> print("What is your name?")
... name = input()
... print("Hello " + name + "! Nice to meet you.")
What is your name?
Pranab
Hello Pranab! Nice to meet you. 
```

After printing the first message a prompt will wait for you to enter a value. Once you hit `return/enter`, it will proceed with next line of code. You can put the first `print` message with the `input` as well. 
```
>>> name = input("What is your name?\n")
... print("Hello " + name + "! Nice to meet you.")
What is your name?
Pranab
Hello Pranab! Nice to meet you. 
``` 

You can format strings using comma "," as well: 
```
>>> print("Hello", name, "!", "Nice to meet you.")
Hello Pranab ! Nice to meet you. 
```
Note that it puts a space between strings and variables. That's the default behavior. By this method, we can combine strings and numbers together, which is not possible with the "+" concatenation (remember? type error). 
```
>>> age = 33
... print("My age is", age)
My age is 33
```

When you enter something on the `input()` function, it is actually a string input. 
```
>>> age = input("How old are you?\n") 
... type(age)
How old are you? 
33
str 
``` 

If you need to perform mathematical operations, you can convert the age to number by using `float()` or `int()` function.  

There is another data type: boolean, which could be either `True` or `False`. 
