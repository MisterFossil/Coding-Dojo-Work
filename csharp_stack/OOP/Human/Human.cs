using System;

namespace Human
{ 
    class Human {
        // Fields for Human
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;

        // add a public "getter" property to access health
        public int healthProp {
            get {
                return health;
            }
        }

        // Add a constructor that takes a value to set Name, and set the remaining fields to default values
        public Human(string name) {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        // Add a constructor to assign custom values to all fields
        public Human(string name, int str, int dex, int intel, int hp) { 
            Name = name;
            Strength = str;
            Dexterity = dex;
            Intelligence = intel;
            health = hp;
        }

        // Build attack method
        public int Attack(Human target) {
            int damage = Strength * 5;
            target.health -= damage;
            return target.healthProp;

        }
    }
    



}