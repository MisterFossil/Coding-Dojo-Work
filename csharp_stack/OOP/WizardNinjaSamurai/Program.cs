using System;

namespace WizardNinjaSamurai
{
    class Program
    {
        static void Main(string[] args)
        {
            Ninja nin = new Ninja();
            Human hum = new Human("Mook1");
            Wizard wiz = new Wizard();
            Saumrai sam = new Saumrai();
            nin.Attack(hum);
            wiz.Attack(nin);
            sam.Attack(hum);
            wiz.Heal(hum);
            nin.Attack(sam);
            sam.Meditate();
            nin.Steal(sam);

        }
    }
}
