class User:
    # What the class has
    def __init__(self, username, email_address):
    
        self.name = username
        self.email = email_address
        self.account_balance = 0

    # What is does
    def make_deposit(self,amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print("User:", self.name + ",", "Balance:", self.account_balance)
        return self
    def transfer_money(self,other_user,amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self

class BankAccount:
    # What the class has
    def __init__(self,balance=0,interest=0.00):
        self.account_balance = balance
        self.interest_rate = interest

    # What the class does
    def deposit(self, amount):
        self.account_balance += amount
        return self
    def withdraw(self, amount):
        self.account_balance -= amount
        return self
    def display_account_info(self):
        print("Balance:", "$" + str(self.account_balance))
        return self
    def yield_interest(self):
        if(self.account_balance > 0):
            self.account_balance += self.account_balance * self.interest_rate
        return self

user1 = User("Jon Seas","notfakeemail@gmail.com")
user2 = User("Ed Hardy", "blackhat@gmail.com")
user3 = User("Harrison Ford","ishotfirst@gmail.com")

account1 = BankAccount(100,0.05)
account2 = BankAccount(1000,0.10)

account1.deposit(100).deposit(50).deposit(50).withdraw(200).display_account_info().yield_interest().display_account_info()
account2.deposit(1000).deposit(2000).withdraw(500).withdraw(250).display_account_info().yield_interest().display_account_info()

# user1.make_deposit(250).make_deposit(100).make_deposit(225).make_withdrawal(300).display_user_balance()
# user2.make_deposit(500).make_deposit(50).make_withdrawal(100).make_withdrawal(1000).display_user_balance()
# user3.make_deposit(1000).make_withdrawal(50).make_withdrawal(100).make_withdrawal(50).display_user_balance()

# user1.transfer_money(user3,100).display_user_balance()
# user3.display_user_balance()





