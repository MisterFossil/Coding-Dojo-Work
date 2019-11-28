using System;

namespace WizardNinjaSamurai
{
    class Saumrai : Human { 
        int maxHP;
        public Saumrai() : base("Samurai") {
            health = 200;
            maxHP = 200;
        }

        public override int Attack(Human target)
        {
            int dmg = calcDmg();
            target.minusHealth(dmg);
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
            if (target.Health < 50) {
                int hp = target.Health;
                target.minusHealth(hp);
            }
            return target.Health;
        }

        public void Meditate() {
            int heal = maxHP - health;
            plusHealth(heal);
        }
    }

}

