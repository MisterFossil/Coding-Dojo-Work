using System;

namespace WizardNinjaSamurai
{
    public class Ninja : Human {


        public Ninja() : base("Ninja") {
            // Name = Name;
            Dexterity = 175;

        }

        // public override int Attack(Human target){
        //     return base.Attack(target);
        // }

        public override int calcDmg(){
            int damage = 5 * Dexterity;
            Random rand = new Random();
            if (rand.Next(1,6) == 1) {
                damage += 10;
            }
            return damage;
        }

        public void Steal(Human target) {
            target.minusHealth(5);
            plusHealth(5);
        }

    }

}