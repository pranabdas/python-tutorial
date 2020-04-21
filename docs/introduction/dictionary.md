### Dictionary 

- Python dictionary are list of key value pairs. 
```python
>>> my_dict = {'Pranab' : 185, 'Sasha' : 196}; 
... print(my_dict)

{'Pranab': 185, 'Sasha': 196} 
``` 

- You can get values by using it's key: 
```python
>>> my_dict['Pranab']

185
``` 

- Adding new items to the dictionary: 
```python
>>> my_dict['Luis'] = 190; 
... print(my_dict)

{'Pranab': 185, 'Sasha': 196, 'Luis': 190}
``` 

- Reassign values: 
```python 
>>> my_dict['Luis'] = 191; 
... print(my_dict)

{'Pranab': 185, 'Sasha': 196, 'Luis': 191}
``` 

- Delete an entry: 
```python 
>>> del my_dict['Luis']; 
... print(my_dict)

{'Pranab': 185, 'Sasha': 196}
``` 

- Looping through keys and values in a dictionary:
```python 
>>> print('Name\t Height'); 
... for key, value in my_dict.items():
...    print(key, '\t', value); 

Name	 Height
Pranab 	 185
Sasha 	 196
``` 

```python 
>>> my_dict.items()

dict_items([('Pranab', 185), ('Sasha', 196)])

>>> type(my_dict.items())

dict_items

>>> type(my_dict)
dict 
``` 

- Looping through keys: 
```python 
>>> for key in my_dict.keys():
...     print(key, my_dict[key])

Pranab 185
Sasha 196

>>> if 'Pranab' in my_dict.keys():
...     print('Hello Pranab, your height is :', my_dict['Pranab'])

Hello Pranab, your height is : 185
```

- Similarly we can loop through values also: 
```python 
>>> my_dict.values()

dict_values([185, 196])

>>> for value in my_dict.values():
...     print(value)

185
196
``` 
