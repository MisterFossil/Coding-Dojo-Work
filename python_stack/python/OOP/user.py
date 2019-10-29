class User:
    # What the class has
    def __init__(self, username, email_address):
    
        self.name = username
        self.email = email_address
        self.account_balance = 0

    # What is does
    def make_deposit(self,amount):
        self.account_balance += amount
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print("User:", self.name + ",", "Balance:", self.account_balance)
    def transfer_money(self,other_user,amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)

user1 = User("Jon Seastedt","blufosil@gmail.com")
user2 = User("Ed Hardy", "blackhat@gmail.com")
user3 = User("Harrison Ford","ishotfirst@gmail.com")

# user1.display_user_balance()
# print(user1.name)
# print(user2.email)
# print(user3.name)

user1.make_deposit(250)
user1.make_deposit(100)
user1.make_deposit(225)
user1.make_withdrawal(300)
user1.display_user_balance()

user2.make_deposit(500)
user2.make_deposit(50)
user2.make_withdrawal(100)
user2.make_withdrawal(1000)
user2.display_user_balance()

user3.make_deposit(1000)
user3.make_withdrawal(50)
user3.make_withdrawal(100)
user3.make_withdrawal(50)
user3.display_user_balance()

user1.transfer_money(user3,100)
user1.display_user_balance()
user3.display_user_balance()





