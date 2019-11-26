using System;
using System.Collections.Generic;

namespace CollectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            // Array to hold integer values 0-9
            int[] numArray = {0,1,2,3,4,5,6,7,8,9};
            // Array to hold a few names
            string[] names = {"Tim","Martin","Nikki","Sara"};
            // Array length of 10
            bool[] values = new bool[10];
            // bool array that alternates true and false starting with true
            for (int i = 0; i < values.Length; i++) {
                if (i % 2 == 0) {
                    values[i] = true;
                } else {
                    values[i] = false;
                }
            }

            // foreach (bool val in values) {
            //     Console.WriteLine(val);
            // }

            // Create a list of ice cream flavors that holds 5 different flavors
            List<string> flavors = new List<string>();
            flavors.Add("Chocolate");
            flavors.Add("Vanilla");
            flavors.Add("Strawberry");
            flavors.Add("Mint Chocolate");
            flavors.Add("Moose Tracks");
            // Output the length of the list after building it
            Console.WriteLine($"The length of flavors is {flavors.Count}");
            // Output the third flavor in the list, then remove this value
            Console.WriteLine(flavors[2]);
            flavors.Remove("Strawberry");
            // Output the new length of the list (it should be one fewer - and it is)
            Console.WriteLine($"The length of flavors is {flavors.Count}");

            // Create a dictionary that will store both string as well as string values
            Dictionary<string,string> iceCream = new Dictionary<string, string>();
            // Add key/value pairs to this dictionary where:
            Random rand = new Random();
            for (int i = 0; i < names.Length; i++) { 
                // each key is a name from your names array
                // each value is a randomly select a flavor from your flavors list
                iceCream.Add(names[i],flavors[rand.Next(0,4)]);
            }
            // Loop through the dictionary and print out each user's name and their associated ice cream flavor
            foreach(KeyValuePair<string,string> entry in iceCream) {
                Console.WriteLine(entry.Key +" - " + entry.Value);
            }


        }
    }
}
