using System;

namespace TacoTruck
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] Cust2D = new int[,]{{10,0},{-1,-10},{2,4}};
            int maxX = Cust2D[0,0];
            int minX = Cust2D[0,0];
            int maxY = Cust2D[0,1];
            int minY = Cust2D[0,1];
            for(int i = 0; i < Cust2D.GetLength(0); i++)
            {
                if(maxX < Cust2D[i,0])
                {
                    maxX = Cust2D[i,0];
                }
                if(maxY < Cust2D[i,1])
                {
                    maxY = Cust2D[i,1];
                }
                if(minX > Cust2D[i,0])
                {
                    minX = Cust2D[i,0];
                }
                if(minY > Cust2D[i,0])
                {
                    minY = Cust2D[i,0];
                }
            }

            int disX = 0;
            int disY = 0;
            int totalDis = 0;
            int[] PlaceHere = new int[2];
            int MaxDis = (Math.Abs(maxX - minX) + Math.Abs(maxY - minY)) * Cust2D.GetLength(0);

            for(int i = minX; i < maxX; i++)
            {
                for(int j = minY; j < maxY; j++)
                {
                    totalDis = 0;
                    for(int k = 0; k < Cust2D.GetLength(0); k++)
                    {
                        disX = Math.Abs(Cust2D[k,0] - i);
                        disY = Math.Abs(Cust2D[k,1] - j);
                        totalDis += disX + disY;
                    }
                    if(totalDis < MaxDis)
                    {
                        PlaceHere = new int[]{i,j};
                        MaxDis = totalDis;
                    }
                }
            }

            Console.WriteLine($"[{PlaceHere[0]},{PlaceHere[1]}]");

        }
    }
}
