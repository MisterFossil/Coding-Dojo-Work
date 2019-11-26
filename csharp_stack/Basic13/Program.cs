using System;
using System.Collections.Generic;

namespace Basic13
{
    class Program
    {
        // Print 1-255
        public static void PrintNumbers() {
            for (int i = 1; i <= 255; i++) {
                Console.WriteLine($"PrintNumbers() prints 1-255: {i}");
            }
        }

        // Print odd numbers between 1-255
        public static void PrintOdds() {
            for (int i = 1; i <= 255; i++) {
                if (i % 2 != 0) {
                    Console.WriteLine($"PrintOdds() prints odd numbers 1-255: {i}");
                }
            }
        }

        // Print Sum
        public static void PrintSum() {
            int sum = 0;
            for (int i = 1; i<=255; i++) {
                Console.WriteLine($"PrintSum() prints all numbers 1-255: {i} and their sum: {sum += i}");
            }
        }

        // Iterating through an Array (or list)
        public static void LoopList(List<int> arr) {
            for (int i = 0; i < arr.Count; i++ ) {
                Console.WriteLine($"The numbers in this list are: {arr[i]}");
            }
            foreach(int num in arr) {
                Console.WriteLine($"The numbers in this list using foreach are: {num}");
            }
        }

        // Find max
        public static int FindMax(List<int> arr) {
            int max = arr[0];
            foreach(int num in arr) {
                if (max < num) {
                    max = num;
                }
            }
            return max;
        }

        // Get Average
        public static void GetAverage(List<int> arr) {
            float sum = 0;
            foreach(int num in arr) {
                sum += num;
            }
            Console.WriteLine($"The average of the list argument is {sum/arr.Count}");
        }

        // Array (list) with Odd Numbers
        public static List<int> OddArray() {
            List<int> odds = new List<int>();
            for(int i = 1; i <=255; i += 2) {
                odds.Add(i);
            }
            return odds;
        }

        // Greater than Y
        public static int GreaterThanY(List<int> numbers, int y) {
            int count = 0;
            foreach(int num in numbers){
                if(num > y) {
                    count += 1;
                }
            }
            return count;
        }

        // Square the Values
        public static void SquareArrayValue(List<int> numbers) {
            for(int i = 0; i < numbers.Count; i++) {
                numbers[i] *= numbers[i];
            }
        }

        // Eliminate Negative Numbers
        public static void EliminateNegatives(List<int> numbers) {
            for(int i = 0; i < numbers.Count; i++) {
                if (numbers[i] < 0) {
                    numbers[i] = 0;
                }
            }
        }

        // Min, Max, Average
        public static void MinMaxAverage(List<int> numbers) {
            int min = numbers[0];
            int max = numbers[0];
            float sum = 0;
            foreach(int num in numbers) {
                sum += num;
                if (num > max) {
                    max = num;
                }
                if (num < min) {
                    min = num;
                }
            }
            Console.WriteLine($"Min: {min}, Max: {max}, Avg: {sum/numbers.Count}");
        }

        // Shifting the values in an array (list?)
        public static void ShiftValues(List<int> numbers) {
            for (int i = 0; i < numbers.Count; i++) {
                if (i == numbers.Count -1 ) {
                    numbers[i] = 0;
                } else {
                    numbers[i] = numbers[i+1];
                }
            }
            // foreach(int num in numbers) {
            //     Console.WriteLine(num);
            // }
        }

        // Number to String
        public static List<object> NumToString(List<int> numbers) {
            List<object> box = new List<object>();
            for (int i = 0 ; i < numbers.Count; i++) {
                if(numbers[i] < 0) {
                    box.Add("Dojo");
                } else {
                    box.Add(numbers[i]);
                }
            }
            return box;
        }


        static void Main(string[] args)
        {
            // PrintNumbers();
            // PrintOdds();
            // PrintSum();
            List<int> numList = new List<int>{1,2,3,4};
            // LoopList(numList);
            int max = FindMax(numList);
            Console.WriteLine($"The Max Value of numList is {max}.");
            GetAverage(numList);
            List<int> odds = OddArray();
            // foreach(int num in odds) {
            //     Console.WriteLine($"OddArray {num}");
            // }
            int greater = 200;
            Console.WriteLine($"The number of values greater than {greater} is: {GreaterThanY(odds,200)}");

            foreach (int num in numList){
                Console.WriteLine($"Numbers in numlist: {num}");
            }
            SquareArrayValue(numList);
            foreach (int num in numList){
                Console.WriteLine($"Squared Numbers in numlist: {num}");
            }

            List<int> nums = new List<int>{1,2,3,4,-5,-6,-7,8,9,10};
            // EliminateNegatives(nums);
            // foreach( int num in nums){
            //     Console.WriteLine(num);
            // }
            MinMaxAverage(nums);

            ShiftValues(nums);
            List<object> box = NumToString(nums);
            foreach(object item in box) {
                Console.WriteLine(item);
            }

        }
    }
}
