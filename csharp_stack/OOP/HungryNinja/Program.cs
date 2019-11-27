using System;
using System.Collections.Generic;

namespace HungryNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Buffet buff = new Buffet();
            Ninja nin = new Ninja();
            while (!nin.IsFull) { 
                nin.Eat(buff.Serve());
            }
        }
    }

    class Food {
        public string Name;
        public int Calories;
        // Foods can be Spicy and/or Sweet
        public bool IsSpicy;
        public bool IsSweet;

        // add a constructor that takes in all four parameters: Name, Caloris, IsSpicy, IsSweet
        public Food(string name, int cals, bool spicy, bool sweet) {
            Name = name;
            Calories = cals;
            IsSpicy = spicy;
            IsSweet = sweet;
        }
    }

    class Buffet {
        public List<Food> Menu;

        // constructor
        public Buffet(){
            Menu = new List<Food> {
                new Food("Breakfast Quesadilla", 880, true, false),
                new Food("Loopy's Korean BBQ Burrito", 900, false, false),
                new Food("Chocolate Chip Cookie", 350, false, true),
                new Food("General Tso's Chicken", 1120, true, true),
                new Food("Vermont Turkey Pepperoni Meat Stick", 35, false, false),
                new Food("Walnuts, Whole & Raw", 210, false, false),
                new Food("Freshly Steak Peppercorn", 480, true, false),
                new Food("Skittles Fun Size", 80, false, true),
            };
        }

        public Food Serve() {
            Random rand = new Random();
            int item = rand.Next(0,Menu.Count);
            return Menu[item];
        }
    }

    class Ninja { 
        private int calorieIntake;
        public List<Food> FoodHistory;

        // add a constructor
        public Ninja() {
            calorieIntake = 0;
            FoodHistory = new List<Food>();

        }

        // add a public "getter" property called "IsFull"
        public bool IsFull {
            get {
                if (calorieIntake > 1200) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        // build out the Eat method
        public void Eat(Food item) {
            if(!IsFull) {
                calorieIntake += item.Calories;
                FoodHistory.Add(item);
                string spice = "";
                string sweet = "";

                if (item.IsSpicy) {
                    spice = "spicy";
                } else {
                    spice = "not spicy";
                }
                if (item.IsSweet) {
                    sweet = "sweet";
                } else {
                    sweet = "not sweet";
                }

                Console.WriteLine($"Yum, Yum! I ate {item.Name} for {item.Calories}. It was {spice} and {sweet}.");

            } else {
                Console.WriteLine("The ninja is full and cannot eat anymore.");
                foreach(Food dish in FoodHistory) {
                    Console.WriteLine($"The ninja ate {dish.Name} for {dish.Calories} calories.");
                }
            }
        }
    }
}
