function min() {
    var numbers = Array.prototype.slice.call(arguments);
    return Math.min.apply(null, numbers);
  }
  console.log(min(155, 92, 17, 31, 22));

function min2(...numbers) {
    return Math.min.apply(null, numbers);
  }
  console.log(min2(10, 92, 17, 31, 22));

function min3(...numbers) {
    return numbers;
  }
min3(10, 92, 17, 31, 22);
  
  

const nums = min3(10, 92, 17, 31, 22);
console.log(nums);
console.log(min2());
console.log(nums);
  
  