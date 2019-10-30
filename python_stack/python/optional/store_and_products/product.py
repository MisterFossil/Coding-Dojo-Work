class Product:
    # What Products has:
    def __init__(self,name,price,category):
        self.name = name
        self.price = price
        self.category = category

    # What Products can do
    def update_price(self,percent_change,is_increased):
        if(is_increased):
            self.price += (self.price * percent_change)
        else:
            self.price -= (self.price * percent_change)
        return self

    def print_info(self):
        print("Prod. Name:", self.name)
        print("Category:", self.category)
        print("Price:", self.price, "\n")
        return self