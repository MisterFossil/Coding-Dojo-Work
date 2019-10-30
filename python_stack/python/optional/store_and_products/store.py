import product

class Store:
    # What Store has:
    def __init__(self, name):
        self.name = name
        self.products = []

    # What Store can do:
    def add_product(self, new_product):
        self.products.append(new_product)
        return self

    def sell_product(self, id):
        remItem = self.products.pop(id)
        remItem.print_info()
        # self.products.pop(id).print_info()
        return self

    def print_products(self):
        print("Contents of",self.name.upper())
        print("*" * 40)
        for product in self.products:
            product.print_info()
        print("*" * 40, "\n")
        return self

    def inflation(self, percent_increase):
        for product in self.products:
            product.update_price(percent_increase, True)
        return self

    def set_clearance(self, category, percent):
        print("Clearance Sale on:", category.upper(),"-", str(percent * 100) + "% off!!!")
        for product in self.products:
            if product.category == category:
                product.update_price(percent, False)


    



# store1 = Store("Wegmans")

# product1 = product.Product("Chicken Wings",9.99,"Chicken")
# product2 = product.Product("Apple",0.89,"Fruit")
# product3 = product.Product("Bread",2.49,"Baked Good")

# store1.add_product(product1).add_product(product2).add_product(product3)
# store1.print_products()

# # should be bread
# # store1.sell_product(2)
# # # should be chicken wings
# # store1.sell_product(0)
# # # should be apple
# # store1.sell_product(0)

# # product1.update_price(.10,True)
# # product1.print_info()
# # store1.inflation(.1)
# # store1.print_products()

# store1.set_clearance("Chicken", .25)
# product1.print_info()
