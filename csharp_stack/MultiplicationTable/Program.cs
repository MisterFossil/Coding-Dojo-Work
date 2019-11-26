using System;

namespace MultiplicationTable
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] multTable = new int[10,10];
            for (int i = 0; i < 10; i++){
                for (int j = 0; j < 10; j++) { 
                    multTable[i,j] = (i+1) * (j+1);
                }
            }

            for (int i = 0; i < 10; i++){
                Console.Write("[ ");
                    for(int j = 0; j < 10; j++){
                        Console.Write($"{multTable[i,j]}, ");
                    }
                Console.Write("]\n");
            }
        }
    }
}
