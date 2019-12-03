using System;

namespace PasscodeGenerator
{
    class StringGenerator
    {
        public string PWGenerator(int size)
        {
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
            Random rand = new Random();
            char[] stringChars = new char[size];

            for (int i = 0; i < size; i++)
            {
                stringChars[i] = chars[rand.Next(chars.Length)];
            }

            string randString = new String(stringChars);
            return randString;
        }

    }

}