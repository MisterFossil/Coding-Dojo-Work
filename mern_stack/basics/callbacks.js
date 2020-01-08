console.log("NOW: ");
console.log("Declaring and assigning variable 'ninja'.");
const ninja = 'Libby';
setTimeout( function myCallbackFunction(){
  console.log("LATER: ")
  console.log(ninja, "LATER"); }, 2000
);
console.log("Printing ninja value.");
console.log(ninja, "NOW");

let a = 2;
const b = function() { console.log("something"); };
function doSomething(x) {
  console.log(typeof(x));
}
doSomething(a);
doSomething(b);

function doSomething(possibleCallback) {
    if (typeof(possibleCallback) === 'function'){
      console.log('possibleCallback is a callback!');
      possibleCallback(); //we can invoke the callback!
    }
    else {
      console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
    }
  }
  doSomething(function myCallback(){ console.log('yes, I am a callback!') });
  doSomething('string');

console.log(77 == '77'); // true - c
console.log(77 === '77'); // false - c
console.log(false == 0); // true - c
console.log(false == ""); // false - I - actually true
console.log(false == null); // false - c
console.log(false == undefined); // false - c
console.log(null == undefined); // false - I - actually true
console.log(false == NaN); // false - c
console.log(NaN == NaN); // false - c


// challenge 
function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: () => 'mix it!'
        },
        brush: {
          product: 'Horsehair brush',
          directions: () => 'start painting!'
        },
        tarp: {
          product: 'A large tarp',
          directions: () => 'cover the floor!',
        }
      };
      resolve(warehouse[item]);
    }, deliveryTime);
  });
}
function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}
const tarp = orderSupplies('tarp');
const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
tarp
  .then(receivedItem)
  .then(() => paint)
  .then(receivedItem)
  .then(() => brush)
  .then(receivedItem)
  .catch(error => console.log(error.message));
  




  
  
  

