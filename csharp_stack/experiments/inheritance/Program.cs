using System;

namespace inheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            C instanceC = new C();
            instanceC.MethodOne();
        }
    }

    class A {
        public virtual void MethodOne() {
            Console.WriteLine("A");
        }
    }

    class B : A {
        public override void MethodOne() {
            base.MethodOne();
            Console.WriteLine("B");
        }
    }

    class C : B {
        public override void MethodOne() {
            base.MethodOne();
            Console.WriteLine("C");
        }
    }
}
