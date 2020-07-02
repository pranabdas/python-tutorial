### while loop, break and continue

- Here we will use `input` and `while` loop to create some interesting prompt messages: 
```python 
>>> name = input("Please enter your name: ")
... print("Hello", name, '!')

Please enter your name: Pranab
Hello Pranab !
``` 
```python 
>>> prompt = "\nTell me something, and I will repeat it back to you:"
... prompt += "\nEnter 'quit' to end the program. "
... 
... message = ""
... while message != 'quit':
...     message = input(prompt)
...     print(message)

Tell me something, and I will repeat it back to you:
Enter 'quit' to end the program. Hello
Hello

Tell me something, and I will repeat it back to you:
Enter 'quit' to end the program. Hello again!
Hello again!

Tell me something, and I will repeat it back to you:
Enter 'quit' to end the program. quit
quit
```

- Use a `flag` to do the same: 
```python 
>>> prompt = "\nTell me something, and I will repeat it back to you:"
... prompt += "\nEnter 'quit' to end the program. "
...
... active = True
... while active:
...     message = input(prompt)
...     
...     if message == 'quit':
...         active = False
...     else:
...         print(message)


Tell me something, and I will repeat it back to you:
Enter 'quit' to end the program. hello python
hello python

Tell me something, and I will repeat it back to you:
Enter 'quit' to end the program. hello everyone
hello everyone

Tell me something, and I will repeat it back to you:
Enter 'quit' to end the program. quit
```

- Use of `break`: 
```python
>>> prompt = "\nTell me something, and I will repeat it back to you:"
... prompt += "\nEnter 'quit' to end the program. "
... 
... while True:
...     message = input(prompt)
...     
...     if message == 'quit':
...         break
...     else: 
...         print(message)

Tell me something, and I will repeat it back to you:
Enter 'quit' to end the program. hello python
hello python

Tell me something, and I will repeat it back to you:
Enter 'quit' to end the program. hello everyone
hello everyone

Tell me something, and I will repeat it back to you:
Enter 'quit' to end the program. quit
```

- Use of `continue`: `continue`  takes to the beginning of a loop 
```python 
>>> current_num = 0
... while current_num < 10:
...     current_num += 1
...     if current_num % 2 == 0:
...         continue
...         
...     print(current_num)

1
3
5
7
9
``` 
