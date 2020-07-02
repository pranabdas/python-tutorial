### Miscellaneous 

- Get arbitrary number of input in a function: 
```python 
>>> def get_biggest_number(*args):
...     return max(args)

>>> get_biggest_number(2, 4, 1, 8)
8
```
