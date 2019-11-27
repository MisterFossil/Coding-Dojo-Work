using System;
using System.Collections.Generic;

namespace BoxingAndUnboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            List<object> box = new List<object>();
            box.Add(7);
            box.Add(28);
            box.Add(-1);
            box.Add(true);
            box.Add("chair");

            int sum = 0;
            for (int i = 0; i < box.Count; i++) {
                Console.WriteLine(box[i]);
                if(box[i] is int) {
                    sum += (int)box[i];
                }
            }
            Console.WriteLine($"The sume of the int objects is {sum}");
        }
    }
}
