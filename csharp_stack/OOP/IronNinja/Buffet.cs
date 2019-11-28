using System;
using System.Collections.Generic;

namespace IronNinja {
    class Buffet {
        public List<IConsumable> Menu;

        // constructor
        public Buffet(){
            Menu = new List<IConsumable> {
                new Food("Breakfast Quesadilla", 450, true, false),
                new Food("Loopy's Korean BBQ Burrito", 350, false, false),
                new Food("Chocolate Chip Cookie", 120, false, true),
                new Food("General Tso's Chicken", 400, true, true),
                new Food("Vermont Turkey Pepperoni Meat Stick", 35, false, false),
                new Food("Walnuts, Whole & Raw", 210, false, false),
                new Food("Freshly Steak Peppercorn", 480, true, false),
                new Food("Skittles Fun Size", 80, false, true),
                new Drink("Coke",140,false),
                new Drink("Bloody Mary",80,true),
                new Drink("Diet Coke",3,false),
                new Drink("Vanilla Shake",250,false),
                new Drink("Hot Sauce Challenge",90,true),
                new Drink("Spicy Tequila Sunrise",80,true),
            };
        }

        public IConsumable Serve() {
            Random rand = new Random();
            int item = rand.Next(0,Menu.Count);
            return Menu[item];
        }
    }

}
    