// PART 1
// 1 - Sigma
function sigma(num) {
    var sum = 0;
    for(var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sigma(5));

// 2- Factorial
function factorial(num) {
    var sum = 1;
    for(var i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}
console.log(factorial(5));

// 3 - Fibonacci
function fibonacci(num) {
    var fib = [0, 1];
    for(var i = 2; i <= num; i++) {
        fib.push(fib[i-2] + fib[i-1]);
        console.log(fib);
    }
    if (num == 0){
        return fib[0];
    } else if (num == 1) {
        return fib[1];
    } else {
        return fib[num];
    }
}
console.log(fibonacci(15));

// 4 - Array: Second-t0-Last
function secondToLast(arr) {
    if(arr.length - 2 >= 0) {
        return arr[arr.length - 2];
    } else { 
        return null;
    }
}
console.log(secondToLast([42, true, 'Liam', 7]));

// 5 - Array: Nth-to-Last
function nthToLast(arr, num) {
    if(arr.length - num >= 0) { 
        return arr[arr.length-num];
    } else {
        return null;
    }
}
console.log(nthToLast([5,2,3,6,4,9,7],3));

// 6 - Array Second-Largest
function secondLargest(arr) {
    var max = arr[0];
    var secondMax = arr[1];
    
    if (arr.length <= 1) {
        return null;
    } else {
        for (var i = 1; i < arr.length; i++) {
            if (secondMax < arr[i] && secondMax < max) {
                secondMax = arr[i];
            }
            if (max < arr[i]) {
                secondMax = max;
                max = arr[i];
            }            
        }
    }
    return secondMax;
}
console.log(secondLargest([20000, 1, -3, 16]));

// 7 - Double Trouble
function doubleTrouble(arr) {
    var len = arr.length-1;
    for(var i = len; i >= 0; i--) {
        arr[i*2+1] = arr[i];
        arr[i*2] = arr[i];
    }
    return arr;
}
console.log(doubleTrouble([4,'Ulysses',42,false,'panda',65,Infinity]));

// PART 2
// 1 - Fibonacci with recursion
function Fib(n) {
    // Fib(n) = Fib(n-2) + Fib(n-1)
    if(n == 0 || n == 1) {
        return n;
    }
    return Fib(n-2) + Fib(n-1);
}
console.log(Fib(5));
