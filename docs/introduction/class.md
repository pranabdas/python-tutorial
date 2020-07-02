### Python class 

- Define a class: 
```python 
class Customer():
    """A customer of ABC Bank with a checking account. Customers have the
    following properties:

    Attributes:
        name: A string representing the customer's name.
        balance: A float tracking the current balance of the customer's account.
    """

    def __init__(self, name, balance=0.0):
        """Return a Customer object whose name is *name* and starting
        balance is *balance*."""
        self.name = name
        self.balance = balance

    def withdraw(self, amount):
        """Return the balance remaining after withdrawing *amount*
        dollars."""
        if amount > self.balance:
            raise RuntimeError('Amount greater than available balance.')
        self.balance -= amount
        return self.balance

    def deposit(self, amount):
        """Return the balance remaining after depositing *amount*
        dollars."""
        self.balance += amount
        return self.balance
``` 

- Create a class object: 
```python 
>>> cust1 = Customer('Pranab', 1000)
>>> cust1.deposit(500)
1500

>>> cust1.name
'Pranab' 

>>> cust1.balance
1500 
``` 

**Rule of thumb:** Do not introduce new attributes outside the `__init__`
