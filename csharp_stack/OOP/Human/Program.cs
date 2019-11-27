using System;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Human human1 = new Human("Jon");
            Human human2 = new Human("Alex");
            human2.Attack(human1);
            Console.WriteLine($"{human1.Name} has {human1.healthProp} health remaining.");
        }
    }

}

