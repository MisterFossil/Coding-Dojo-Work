using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        public static List<int> RandomList() {
            Random rand = new Random();
            List<int> numbers = new List<int>();
            for (int i = 0; i < 10; i++) {
                numbers.Add(rand.Next(5,26));
            }
            int max = numbers[0];
            int min = numbers[0];
            int sum = 0;
            foreach(int num in numbers) { 
                if (num > max) {
                    max = num;
                }
                if (min > num) {
                    min = num;
                }
                sum += num;
            }
            Console.WriteLine($"Min: {min}, Max: {max}, Sum: {sum}");
            return numbers;
        }

        public static string TossCoin() {
            Console.WriteLine("Tossing a coin.");
            Random rand = new Random();
            string result = "";
            int flip = rand.Next(0,2);
            if (flip%2 == 0) {
                Console.WriteLine("Heads");
                result = "Heads";
            } else {
                Console.WriteLine("Tails");
                result = "Tails";
            }
            return result;
        }

        public static double TossMultipleCoins(int num) {
            string result = "";
            double count = 0;
            for (int i = 0; i < num; i++) {
                result = TossCoin();
                if (result == "Heads") {
                    count++;
                }
            }
            return count/num;
        }

        public static List<string> Names(){
            List<string> names = new List<string>{"Tood","Tiffany","Charlie","Geneva","Sydney"};
            Random rand = new Random();
            for(int i = 0; i < names.Count; i++) {
                int swap = rand.Next(0,names.Count);
                string tmp = names[i];
                names[i] = names[swap];
                names[swap] = tmp;
            }

            foreach(string name in names){
                Console.WriteLine(name);
            }

            for(int i = 0; i < names.Count; i++) {
                if(names[i].Length < 6) {
                    names.Remove(names[i]);
                    i--;
                }
            }

            return names;
        }

        static void Main(string[] args)
        {
            List<int> randArr = RandomList();
            // foreach(int num in randArr) {
            //     Console.WriteLine(num);
            // }
            // string result = TossCoin();
            int num = 1;
            double ratio = TossMultipleCoins(num);
            Console.WriteLine($"The percentage of Heads vs Tails in {num} tosses is {ratio*100}%");

            List<string> names = Names();
            foreach(string name in names) {
                Console.WriteLine($"Returned list of names: {name}");
            }

        }
    }
}
