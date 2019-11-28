using System;
using System.Collections.Generic;

namespace IronNinja
{
    class SweetTooth : Ninja {
        public override bool IsFull {
            get {
                if (calorieIntake > 1500) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        public override void Consume(IConsumable item) {
            if(IsFull == false) {
                Console.WriteLine(item.GetInfo());
                ConsumptionHistory.Add(item);
                calorieIntake += item.Calories;
                if (item.IsSweet) {
                    calorieIntake += 10;
                }
            }
            if(IsFull) {
                Console.WriteLine("This ninja is too full to continue eating.");

            }

        }
    }
}