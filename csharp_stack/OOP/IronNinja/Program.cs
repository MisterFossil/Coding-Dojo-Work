using System;

namespace IronNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Buffet jimmyBuffet = new Buffet();
            SweetTooth STnin = new SweetTooth();
            SpiceHound SHnin = new SpiceHound();
            while(STnin.IsFull == false) {
                IConsumable dish = jimmyBuffet.Serve();
                STnin.Consume(dish);
            }
            while(SHnin.IsFull == false) {
                IConsumable dish = jimmyBuffet.Serve();
                SHnin.Consume(dish);
            }
            if (STnin.ConsumptionHistory.Count > SHnin.ConsumptionHistory.Count) {
                Console.WriteLine($"The SweetTooth ate the most at {STnin.ConsumptionHistory.Count} dishes.");
            } else if (SHnin.ConsumptionHistory.Count > STnin.ConsumptionHistory.Count) {
                Console.WriteLine($"The SpiceHound ate the most at {SHnin.ConsumptionHistory.Count} dishes.");
            } else {
                Console.WriteLine($"Both ninjas tied at {STnin.ConsumptionHistory.Count} dishes!");
            }
            

        }
    }
}

