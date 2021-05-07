---
title: Flow control
---
### if-else condition
```python
age = 33;

if (age >= 18):
    print("You are adult person.")
else:
    print("You are not an adult yet.")
```

You can have multiple conditions with `elif` statements:
```python
age = 70;

if (age >=18 and age <65):
    print("You are adult person.")
elif (age >=65):
    print("You are a senior.")
else:
    print("You are not an adult yet.")
```

Now try with different age to see the results yourself. Note the use of `and` to
combine conditions. In case of `if/else` condition check, once a `if` condition
is satisfied, the code exits there, it does not check for next conditions.
