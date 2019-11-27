using System;

namespace BinarySearch
{
    class Program
    {
        public static bool BinarySearch(int i, int[] arr){
            int start = 0;
            int end = arr.Length - 1;
            int half = (end-start)/2;
            if (i < arr[0]) {
                return false;
            }
            if (i> arr[arr.Length-1]) {
                return false;
            }

            while(true) {
                if(start == end || start > end ) {
                    return false;
                }
                if(arr[half] == i) {
                    return true;
                }
                if(i > arr[half]) {
                    start = half;
                }
                if (i < arr[half]) {
                    end = half;
                }
                half = (end-start)/2;
                if(half == 0) {
                    half++;
                }
                half += start;
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int[] arr = {1,2,3,4,5,6,7,8,9,10};
            Console.WriteLine(BinarySearch(10, arr));
        }
    }
}
