// * given a temperature in celcius, return the temperature in farhenheit
function CelToFar(degree)
{
    degree = (degree * 9 / 5) + 32;
    return degree;
}
console.log(CelToFar(100));
// * return an array of fibonacci numbers up to some number n
// *
function fibo(num)
{
    // if(num < 2)
    // {
    //     return num;
    // }

    let fiboArr = [0,1];
    for (let i = 2; i < num; i++)
    {
        fiboArr.push(fiboArr[i-1] + fiboArr[i-2]);
    }
    return fiboArr;
}
console.log(fibo(8));

function RFibo(num)
{
    if (num < 2)
    {
        return num;
    }
    else
    {
        return RFibo(num - 2) + RFibo(num - 1);
    }
}

console.log(RFibo(8));
// * count the number of words in a string
// * 
function WordCount(sentence, separator = " ")
{
    let count = 1;
    for(let i = 0; i < sentence.length; i++)
    {
        if(sentence[i] == separator)
        {
            count++;
        }
    }
    return count;
}

console.log(WordCount("This,is,a,sent,ence?", ','));
// * given an array of numbers, return an array containing the square root of each value
// * return 0 for any values that would be NaN
// *
function squareRootArr(sqArr)
{
    for(let i = 0; i < sqArr.length; i++)
    {
        if(sqArr[i] < 0)
        {
            sqArr[i] = 0;
        }
        else 
        {
            sqArr[i] = Math.sqrt(sqArr[i]); 
        }
    }
    return sqArr;
}

console.log(squareRootArr([1,4,9,16,25,36,49,64,81,100, -10]));
// * given a string of words, return the words in opposite order
// * eg "Hello world" => "world Hello"
// *
function Reverse(sentence)
{
    let revArr = [];
    let revString = "";
    let index = sentence.length;
    for(let i = sentence.length - 1; i >= 0; i--)
    {
        if(sentence[i] == " ")
        {
            revArr.push(sentence.slice(i+1,index));
            index = i;
        }
        if(i == 0)
        {
            revArr.push(sentence.slice(i,index));
        }
    }
    for(let i = 0; i < revArr.length; i++)
    {
        revString += revArr[i] + " ";
    }
    return revString;
}
console.log(Reverse("This is a sentence"));
console.log(Reverse("Hello world"));
console.log(Reverse("sentence"));
// * given an array arr and an index x, remove the value at x and shift the values over
// *
function removeElement(arr, index)
{
    arr.splice(index, 1);
    return arr;
}

console.log(removeElement([1,2,3,4,5],2));
// * given a value "val" and an index "x" and an array "arr", move the values over 1 from index x
// * and add the value at index x
// *
function addElement(val,x,arr)
{
    arr.splice(x,0,val);
    return arr;
}
console.log(addElement(5,2,[1,2,3,4]));
// * you're given two colors in the form (255, 0, 0) and (0, 0, 255) and a number between 0 and 1
// * using the number (eg. 0.3) find a number 30% of the way between color1 and color2
// *
// * given a time in seconds (since midnight), return the angles of the minute and hour hand of a clock
// * 8100 (2:15 AM) => {hour:60, minute: 90}
function getClockAngles(numSecs)
{
    let hours = 0;
    let minutes = 0;
    while(numSecs >= 3600)
    {
        hours++;
        numSecs -= 3600;
        if (hours >= 12)
        {
            hours -= 12;
        }
    }
    while(numSecs >= 60)
    {
        minutes++;
        numSecs -= 60;
    }
    return `{hour:${hours *30}, minute: ${minutes * 6}}`;
}
console.log(getClockAngles(8100));
// *
// * you are given a string that looks like '0b1011' return the decimal value (11)
// *
function convertBinary(binString)
{
    let num = 0.0;
    for(let i = 2; i < binString.length; i++)
    {
        if(i == 2 && binString[i] == 1)
        {
            num += 8;
        }
        else if (i == 3 && binString[i] == 1)
        {
            num += 4;
        }
        else if (i == 4 && binString[i] == 1)
        {
            num += 2;
        }
        else if (i == 5 && binString[i] == 1)
        {
            num += 1;
        }
    }
    return num;
}
console.log(convertBinary("0b1011"));
// * given a number 'n' that is less than 16 (eg 9) return a string that looks like '0b1001'
// *
function ConvertToBinary(num)
{
    let binArr = ["0b","0","0","0","0"];
    let binStr = "";
    if (num >= 16)
    {
        return "Out of bounds";
    }
    if (num >= 8)
    {
        binArr[1] = "1";
        num -= 8;
    }
    if (num >= 4)
    {
        binArr[2] = "1";
        num -= 4;
    }
    if (num >= 2)
    {
        binArr[3] = "1";
        num -= 2;
    }
    if(num >= 1)
    {
        binArr[4] = "1";
    }
    for(let i = 0; i < binArr.length; i++)
    {
        binStr += binArr[i];
    }
    return binStr;    
}
console.log(ConvertToBinary(5));
// * given a number less than 1000, return the number in words
// * 639 => "six hundred thirty nine"
// * 213 => "two hundred thirteen"