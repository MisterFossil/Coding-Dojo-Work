using System;

namespace FundamentalsI
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Random rand = new Random();
            for(int val = 0; val < 10; val++){
                Console.WriteLine(rand.Next(2,8));
            }

            for(int i = 1; i <=255; i++){
                Console.WriteLine(i);
            }

            for(int j = 1; j <= 100; j++){
                if (j % 5 == 0 && j % 3 == 0){
                    continue;
                } else if (j % 5 == 0) { 
                    Console.WriteLine(j);
                } else if (j % 3 == 0) {
                    Console.WriteLine(j);
                }
            }

            for(int j = 1; j <= 100; j++){
                if (j % 5 == 0 && j % 3 == 0){
                    Console.WriteLine("Fizzbuzz");
                } else if (j % 5 == 0) { 
                    Console.WriteLine("Buzz");
                } else if (j % 3 == 0) {
                    Console.WriteLine("Fizz");
                }
            }

            int k = 1;
            while(k <= 255) {
                Console.WriteLine(k);
                k++;
            }

            int l = 1;
            while(l <= 100) {
                if (l % 5 == 0 && l % 3 == 0) {
                    l++;
                    continue;
                } else if (l % 5 == 0) {
                    Console.WriteLine($"{l} is Divisible by 5");
                } else if (l % 3 == 0) {
                    Console.WriteLine($"{l} is divisibile by 3");
                }
                l++;
            }

            int m = 1;
            while(m <= 100) {
                if (m % 5 == 0 && m % 3 == 0) {
                    Console.WriteLine("Fizzbuzz");
                } else if (m % 5 == 0) {
                    Console.WriteLine($"Buzz");
                } else if (m % 3 == 0) {
                    Console.WriteLine($"Fizz");
                }
                m++;
            }
        }
    }
}
