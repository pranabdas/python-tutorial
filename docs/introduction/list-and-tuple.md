### Python lists and tuples

- It is a good idea to name lists as plural as they contain multiple elements. Like, `names`, `items` etc.

```python
>>> names = ['Rupal', 'Pranab', 'Bhanu']
>>> print(names)

['Rupal', 'Pranab', 'Bhanu']
```

- Lists are mutable. 
```python
>>> names[2] = 'Nihit'
>>> print(names) 

['Rupal', 'Pranab', 'Nihit']
```

- Adding new items to the list
```python
>>> names.append('Bhanu')
>>> print(names)

['Rupal', 'Pranab', 'Nihit', 'Bhanu']
```

- Inserting item in a specific place. 
```python
>>> names.insert(2, 'Nitin')
>>> print(names)

['Rupal', 'Pranab', 'Nitin', 'Nihit', 'Bhanu']
```

- Deleting items from list. 
```python
>>> del names[1]
>>> print(names)

['Rupal', 'Nitin', 'Nihit', 'Bhanu']
```

- `pop` method of removing. `pop` let you use the removed item.
```python
>>> removed_name = names.pop()
>>> print(names)

['Rupal', 'Nitin', 'Nihit']

>>> print(removed_name)

Bhanu
```

- `pop` can remove actually any item. 
```python
>>> names.pop(1)

'Nitin'

>>> print(names)

['Rupal', 'Nihit']
```

- Remove an item by its value. 
```python
>>> names.remove('Rupal')
>>> print(names)

['Nihit']
```

**NOTE:** If there are more than one item with same value, the `.remove` method removes only the first occurrence.


```python
>>> names.append('Rupal')
... names.append('Nitin')
... names.append('Nihit')
... names.append('Bhanu')
... print(names)

['Nihit', 'Rupal', 'Nitin', 'Nihit', 'Bhanu']

>>> names.remove('Nihit')
... print(names)

['Rupal', 'Nitin', 'Nihit', 'Bhanu']
```

- Sort lists temporarily using `sorted` function. 
```python
>>> print(sorted(names))

['Bhanu', 'Nihit', 'Nitin', 'Rupal']

>>> print(names)

['Rupal', 'Nitin', 'Nihit', 'Bhanu']
```

- Sort lists permanently by using `sort` method.
```python
>>> names.sort()
>>> print(names)

['Bhanu', 'Nihit', 'Nitin', 'Rupal']
```

- Reverse list times using `.reverse` method
```python
>>> names.reverse()
>>> print(names)

['Rupal', 'Nitin', 'Nihit', 'Bhanu']
```


```python
>>> names[2] = 'nihit'
... names.sort()
... print(names)

['Bhanu', 'Nitin', 'Rupal', 'nihit']
```

**Note:** Notice how `sort` did not work as expected when we mix uppercase and lowercase. 

- Looping items in a list
```python
>>> for name in names:
...     print(name)

Bhanu
Nitin
Rupal
nihit
```

- Use `range` function to create numerical lists.
```python
>>> nums = list(range(1, 11))
... print(nums)

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```python
>>> squares = []
>>> for num in nums:
...    squares.append(num**2)

>>> for ii in range(len(nums)): 
...     print(nums[ii], '\t', squares[ii])

nums	 squares
1 	 1
2 	 4
3 	 9
4 	 16
5 	 25
6 	 36
7 	 49
8 	 64
9 	 81
10 	 100
```

```python
>>> even_numbers = list(range(2, 11, 2))
>>> print(even_numbers)

[2, 4, 6, 8, 10]
```

**List comprehensions**


```python
>>> squares = [value**2 for value in range(1, 11)]
>>> print(squares)

[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

### Tuples

Tuples are just like *lists* except that they are immutable. However, we can update the whole tuple instead of individual entries. Here we use parenthesis instead of square bracket to define tuples. 

```python
>>> tup = (1, 2, 3)
>>> tup[0]

1
```
- Reassigning values would result in errors
```python
>>> tup[1] = 4 # would result in error

---------------------------------------------------------------------------

TypeError                                 Traceback (most recent call last)

<ipython-input-41-1985035aacbf> in <module>
----> 1 tup[1] = 4


TypeError: 'tuple' object does not support item assignment
```
- But we can reassign the whole tuple: 
```python
>>> tup = (2, 3, 4, 5)
>>> print(tup)

(2, 3, 4, 5)
```


```python
>>> type(tup)

tuple
```
