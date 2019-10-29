// 1 - Get 1 to 255
function returnArray(){
    var arr = [];
    for(var i=1; i < 256; i++){
        arr.push(i);
    }
    return arr;
}
console.log(returnArray());

// 2 - Get even 1000
function getEvenSum() {
    var sum = 0;
    for( var i=0; i<=1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(getEvenSum());

// 3 - Sum odd 5000
function getOddSum() {
    var sum = 0;
    for( var i=1; i<=5000; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(getOddSum());

// 4 - Iterate an array
function sumArray(arr) {
    var sum = 0;
    for( var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([-5,2,5,12]));

// 5 - Find max
function findMax(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([-3,3,5,7]));

// 6 - Find Average
function findAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(findAverage([1,3,5,7,20]));

// 7 - Array Odd
function oddArray() {
    var arr = [];
    for(var i = 1; i < 50; i += 2){
        arr.push(i);
    }
    return arr;
}
console.log(oddArray());

// 8 - Greater than y
function greaterThanY(arr, y){
    var higherThanY = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            higherThanY++;
        }
    }
    return higherThanY;
}
console.log(greaterThanY([1,3,5,7],3));

// 9 - Squares
function squares(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}
console.log(squares([1,5,10,-2]));

// 10 - Negatives
function negatives(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(negatives([1,5,10,-1]));

// 11 - Max/Min/Avg
function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    
    for(var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        if(min > arr[i]) {
            min = arr[i];
        }
        sum += arr[i];
    }

    return [ max, min, sum/arr.length ];
}
console.log(maxMinAvg([1,5,10,-2]));

// 12 - Swap Values
function swapValues(arr) {
    var tmp = arr[0];
    arr[0] = arr[arr.length -1];
    arr[arr.length-1] = tmp;
    return arr;
}
console.log(swapValues([1,5,10,-2]));

// 13 - Number to String
function numberToString(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(numberToString([-1,-3,2]));

