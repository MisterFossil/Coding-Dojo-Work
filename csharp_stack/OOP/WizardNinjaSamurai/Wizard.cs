using System;

namespace WizardNinjaSamurai
{
    public class Wizard : Human {
        public Wizard() : base("Wizard") {
            Intelligence = 25;
            health = 50;
        }
    

        public override int calcDmg() {
            int damage = 5 * Intelligence;
            plusHealth(damage);
            return damage;
        }

        public void Heal(Human target) {
            target.plusHealth(10 * Intelligence);
        }
    }

}