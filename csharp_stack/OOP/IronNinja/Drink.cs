using System;

namespace IronNinja
{
        class Drink : IConsumable
    {
        public string Name {get;set;}
        public int Calories {get;set;}
        public bool IsSpicy {get;set;}
        public bool IsSweet {get;set;}
        
        // Implement a GetInfo Method
        public string GetInfo() {
            return $"{Name} (Food).  Calories: {Calories}.  Spicy?: {IsSpicy}, Sweet?: {IsSweet}";
        }

        // Add a constructor method
        public Drink(string n, int kcal, bool spicy) {
            Name = n;
            Calories = kcal;
            IsSpicy = spicy;
            IsSweet = true;

        }
    }   




}