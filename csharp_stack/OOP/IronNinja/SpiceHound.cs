using System;
using System.Collections.Generic;

namespace IronNinja
{
    class SpiceHound : Ninja {
        public override bool IsFull {
            get {
                if (calorieIntake > 1200) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        public override void Consume(IConsumable item) {
            if(!IsFull) {
                Console.WriteLine(item.GetInfo());
                ConsumptionHistory.Add(item);
                calorieIntake += item.Calories;
                if (item.IsSpicy) {
                    calorieIntake -= 5;
                }
            }
            if(IsFull) {
                Console.WriteLine("This ninja is too full to continue eating.");
            }

        }
    }
}