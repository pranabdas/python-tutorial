### More on String formatting 

We can use Python methods to format strings. Here is an example: 

```
>>> "Singapore".upper()
'SINGAPORE'

>>> "Singapore".lower()
'singapore'

>>> "das".capitalize()
'Das'

>>> "pranab das".title()
'Pranab Das'

>>> "ABCDefgh".swapcase()
'abcdEFGH'
```

- Here is another useful method to format complex strings: 
```python
>>> name = 'Pranab Das'
... age = 33
... print('My name is {0}. I am {1} years old.'.format(name, age))

My name is Pranab Das. I am 33 years old.
```
