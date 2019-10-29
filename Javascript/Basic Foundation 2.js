// 1 - Biggie Size
function biggieSize(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            arr[i] = 'big';
        }
    }
    return arr;
}
console.log(biggieSize([-1,3,5,-5]));

// 2 - Print Low, Return High
function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(high < arr[i]) {
            high = arr[i];
        }
        if(low > arr[i]) {
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(printLowReturnHigh([-1,3,5,-5]));

// 3 - Print One, Return Another
function printOneReturnAnother(arr) {
    console.log(arr);    
    console.log(arr[arr.length - 2]);
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if((arr[i] % 2 == 1) || (arr[i] % 2 == -1)) {
            return arr[i];
        }
    }
    return "no odds";
}
console.log(printOneReturnAnother([-1,3,5,-5]));

// 4 - Double Vision
function doubleVision(arr) {
    var doubleArr = [];
    for (var i = 0; i < arr.length; i++) {
        doubleArr.push(arr[i] * 2);
    }
    return doubleArr;
}
console.log(doubleVision([1,2,3]));

// 5 - Count Positives
function countPositives(arr) {
    var posCount = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            posCount++;
        }
    }
    arr[arr.length -1] = posCount;
    return arr;
}
console.log(countPositives([-1,1,1,1]));

// 6 - Evens and Odds 
function evensAndOdds(arr) {
    var oddCount = 0;
    var evenCount = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 1 || arr[i] % 2 == -1 && evenCount == 0) {
            oddCount++;
            evenCount = 0;
            if(oddCount == 3) {
                console.log("That's odd!");
                oddCount = 0;
            }
        } else {
            evenCount++;
            oddCount = 0;
            if(evenCount == 3) {
                console.log("Even more so!");
            }
        }
    }

}
evensAndOdds([1,2,2,4,1,2,1,3,5,2,4,4,1,2,2,3,3,9,8,6,4]);

// 7 - Increment the Seconds
function incrementTheSeconds(arr) {
    for(var i = 1; i < arr.length; i += 2) {
         arr[i] += 1;
    }
    for(var j = 0; j < arr.length; j++) {
        console.log(arr[j]);
    }
    return arr;
}
console.log(incrementTheSeconds([1,2,3,4,5,6,7,8,9]));

// 8 - Previous lengths
function previousLengths(arr) {
    for(var i = arr.length -1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(previousLengths(['hello','dojo','awesome','billy','video game','nightmare']));

// 9 - Add Seven
function addSeven(arr) {
    var sevenArr = [];
    for(var i = 0; i < arr.length; i++) {
        sevenArr.push(arr[i] + 7);
    }
    return sevenArr;
}
console.log(addSeven([1,2,3,4,5]));

// 10 - Reverse Array
function reverseArray(arr) {
    for(var i = 0; i < arr.length/2; i++){
        var tmp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i] = tmp;
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5,6,]));

// 11 - Outlook:Negative
function outlookNegative(arr) {
    var negArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            negArr.push(arr[i] * -1);
        } else {
            negArr.push(arr[i]);
        }
    }
    return negArr;
}
console.log(outlookNegative([1,-3,5,0,4,-3,-4]));

// 12 - Always Hungry
function alwaysHungry(arr) {
    var fed = false;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 'food') {
            console.log('yummy');
            fed = true;
        }
    }
    if(!fed) {
        console.log("I'm hungry");
    }
}
alwaysHungry(['foods',1,2,3,4,'burger','fries','foods']);

// 13 - Swap Towards The Center
function swapTowardCenter(arr) {
    for(var i = 0; i < arr.length/2; i += 2) {
        var tmp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = tmp;
    }
    console.log(arr);
}
swapTowardCenter([1,2,3,4,5,6,7,8])

// 14 - Scale the Array
function scaleTheArray(arr, num) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}
console.log(scaleTheArray([1,2,3,4,5,6,7,8,9,10],10));