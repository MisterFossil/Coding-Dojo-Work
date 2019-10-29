class User:
    def __init__(self, username, email_address):
        self.name = username
        self.email = email_address
        self.account_balance = 0 

    # adding deposit method
    def make_deposit(self,amount):
        self.account_balance += amount

guido = User("Guido von Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")


print(guido.name, monty.name)
guido.make_deposit(100)
guido.make_deposit(200)
monty.make_deposit(-50)
print(guido.account_balance)
print(monty.account_balance)