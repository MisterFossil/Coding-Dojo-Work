import store


store1 = store.Store("Wegmans")

product1 = store.product.Product("Chicken Wings",9.99,"Chicken")
product2 = store.product.Product("Apple",0.89,"Fruit")
product3 = store.product.Product("Bread",2.49,"Baked Good")

store1.add_product(product1).add_product(product2).add_product(product3)
store1.print_products()

# should be bread
store1.sell_product(2)
# should be chicken wings
store1.sell_product(0)
# should be apple
store1.sell_product(0)

product1.update_price(.10,True)
product1.print_info()
store1.inflation(.1)
store1.print_products()

store1.set_clearance("Chicken", .25)
product1.print_info()