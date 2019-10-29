// Jon Seastedt Pre-Bootcamp Algorithm Book

//Page 16
// Setting and Swapping
var myNumber = 42;
var myName = "Jon";
myNumber = myName;
myName = myNumber;

// Print and Count
var count = 0;
for(var i = 512; i < 4096; i++){
    if (i % 5 == 0){
        console.log(i);
        count++;
    }
}
console.log(count);

// Print -52 to 1066
for(var i = -52; i < 1067; i++){
    console.log(i);
}

// Multiples of 6
var SixCount = 6;
while(SixCount < 60000){
    console.log(SixCount);
    SixCount += 6;
}

// Don't Worry, Be Happy
function beCheerful(){
    for(var i = 0; i < 98; i++){
        consolg.log("good morning!");
    }
}

// Counting, the Dojo Way
for(var i = 1; i <= 100; i++){
    if(i % 5 == 0){
        console.log("Coding");
        if(i % 10 == 0){
            console.log(" Dojo");
            continue;
        }
        continue;
    }
    console.log(i);
}

// Multiples of 3 - but not all
for(var i = -300; i < 0; i++){
    if (i % 3 == 0){
        if(i == -3 || i == -6){
            continue;
        }
        console.log(i);
    }
}

// What do you know?
function myFunction(randInput){
    console.log(randInput);
}

// Printing Integers with While
var intWithWhile = 0;
while(intWithWhile < 5281){
    console.count(intWithWhile);
    intWithWhile++;
}

// Woah, that sucker's huge
// I'm not quite sure what the shortcut would be except wouldn't the sum always come to 0?
var sumOdds = 0;
for(var i = -300000; i <= 300000; i++){
    if(i % 2 == 1 || i % 2 == -1){
        sumOdds += i;
    }
}
console.log(sumOdds);

// You say it's your birthday
var birthDay = 01;
var birthMonth = 01;
var day = 30;
var month = 9;
if(day == birthDay && month == birthMonth){
    console.log("How did you know?");
}else{
    console.log("Just another day....");
}

// Countdown by Fours
var countDown = 2016;
while(countDown > 0){
    console.log(countDown);
    countdown -= 4;
}

// Leap Year
function isLeapYear(year){
    if(year % 400 == 0){
        return true;
    } else if(year % 100 == 0){
        return false;
    } else if(year % 4 == 0){
        return true;
    } else {
        return false;
    }
}

// Flexible Countdown
function flexCountdown(lowNum, highNum, mult){
    var count = highNum;
    while(count >= lowNum){
        if(count % mult == 0){
            console.log(count);
        }
        count--;
    }
}

// The Final Countdown
function finalCountdown(param1, param2, param3, param4){
    // print multiples fo param1
    // start at param2
    // high is param3
    // dont print param4
    var count = param2;
    while(count <= param3){
        if(count % param1 == 0 && count != param4){
            console.log(count);
        }
    }
}

// Page 20
// Countdown
function countdownArray(num){
    var arr = [];
    for(var i = num; i >= 0; i--){
        arr.push(i);
    }
    return arr;
    // we can use arr.length to find how large the array is
    // but it should also have as many elements as num + 1, because 0 is included
    // eg. num = 5 returns [5,4,3,2,1,0]
}

// Print and Return
function printAndReturn(num1, num2){
    console.log(num1);
    return num2;
}

// First Plus Length
function firstPlusLength(arr){
    return arr[0] + arr.length;
    // for strings in the first element it may concatenate so if arr = ["hi",7,4]
    // this function could possibly return hi3 
    // If I had to hazard a guess, the boolean might do the same thing, but I'm not sure
}

// Values Greater than Second
function greaterThanSecond(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}

// Values Greater than Second Generalized
function greaterThanSecondGen(arr){
    var count = 0;
    var arr1 = []

    if (arr.length > 2){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > arr[1]){
                arr1.push(arr[i]);
                count++;
            }
        }

        console.log(count);
        return arr1;

    } else {
        console.log("The array isn't long enough to run 'greaterThanSecondGen().'")
        return arr;
    }
    
}

// This Length, That Value
function thisLengthThatValue(num1, num2){
    var arr = [];
    for(var i = 0; i < num1; i++){
        arr.push(num2);
    }

    if(num1 == num2){
        console.log("Jinx!");
    }

    return arr;
}

// Fit the First Value
function fitTheFirstValue(arr){
    if(arr[0] > arr.length){
        console.log("Too big!");
    } else if (arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}

// Farhenheit to Celsius
function fahrenheitToCelsius(fDegrees){
    var cDegrees = (((fDegrees - 32) * 5) / 9);
    return cDegrees;
}

// Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees){
    var fDegrees = (9/5 * cDegrees) + 32;
    return fDegrees;
}

// Fahrenheit and Celsius are the same at -40
// To find this using programming you could do something like this:
function fahrenheitEqualsCelsius(){
    // A bit of a risk causing a computer to lockup, but if we write the function correctly
    // it should return the value -40 and stop running
    var degrees = 200;
    var fAndCEqual = false;
    while(!fAndCEqual){
        var cDegrees = fahrenheitToCelsius(degrees);
        var fDegrees = celsiusToFahrenheit(degrees);
        if (cDegrees == fDegrees){
            console.log("Farenheit and Celsius and equal at ", degrees);
            fAndCEqual = true;
            return degrees;
        }
    }
}

// Page 22
// Biggie Size
function biggieSize(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

// Previous Lengths
function previousLengths(arr){
    prevStr = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(i == 0){
            // There is no previous string for the first element, so it's 0?
            arr[0] = 0;
        } else {
            var temp = prevStr;
            prevStr = arr[i];
            arr[i] = temp.length;
        }
    }
}

// Print Low, Return High
function printLowReturnHigh(arr){
    var low = arr[0];
    var high = arr [0];
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > high){
            high = arr[i];
        }
        if(arr[i] < low){
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}

// Add 7 to Most
function addSevenToMost(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(i == 0){
            continue;
        } else {
            newArr.push(arr[i] + 7);
        }
    }
    return newArr;
}

// Print One, Return Another
function printOneReturnAnother(arr){
    console.log(arr[arr.length - 2]);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1 || arr[i] % 2 == -1){
            return arr[i];
        } else {
            return "No odds.";
        }
    }
}

// Reverse Array
function reverseArray(arr){
    copyArr = arr;
    newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(copyArr.pop());
    }

    return newArr;
}

// Double Vision
function double(arr){
    newArr = [];
    
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }

    return newArr;
}

// Outlook: Negative
function outlookNegative(arr){
    var newArr = arr;
    for(var i = 0; i < newArr.length; i++){
        if(newArr[i] > 0){
            newArr[i] *= -1;
        }
    }
}

// Count Positives
function countPositives(arr){
    var count = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
    }

    arr.pop();
    arr.push(count);

    return arr;
}

// Always Hungry
function alwaysHungry(arr){
    var fed = false;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            fed = true;
        }
    }

    if(!fed){
        console.log("I'm hungry");
    }
}

// Evens and Odds
function evensAndOdds(arr){
    var oddCount = 0;
    var evenCount = 0;
    var lastElementOdd = false;
    var lastElementEven = false;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1 || arr[i] % 2 == -1){
            if (lastElementEven == false){
                oddCount++;   
            }
            lastElementOdd = true;
            lastElementEven = false;
        } else {
            // is 0 considered even?
            if (lastElementOdd == false){
                evenCount++;
            }
            lastElementOdd = false;
            lastElementEven = true;
        }

        if (oddCount == 3){
            console.log("That's odd!");
            oddCount = 0;
            evenCount = 0;
        } else if(evenCount == 3){
            console.log("Even more so!");
            oddCount = 0;
            evenCount = 0;
        }
    }
}


// Swap Toward the Center
function swapTowardCenter(arr){
    var temp;
    var count = arr.length -1;

    for(var i = 0; i < arr.length; i++){
        if(i == 0){
            temp = arr[0];
            arr[0] = arr[count];
            arr[count] = temp;
            count += 2;
        } else if ((i < arr.length/2) && (i % 2 == 0)){
            temp = arr[i];
            arr[i] = arr[count];
            arr[count] = temp;
            count += 2;
        }
    }

    return arr;
}

// Increment the Seconds
function incrementTheSeconds(arr){
    for(var i = 0; i < arr.length; i++){
        if(i % 2 == 1){
            arr[i] += 1;
        }
        console.log(arr[i]);
    }

    return arr;
}

// Scale the Array
function scaleArray(arr, num){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= num;
    }

    return arr;
}
