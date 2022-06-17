var returnedValue = Math.max(2, 5, 7, 4, 8, 9);
console.log(returnedValue);

var myObj = {};

Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
console.log(myObj);

function sumOne(a, b) {
  return a + b;
}

var myA = [5, 4, 9];
console.log(sumOne(...myA)); // spread operator

function addInfi(a, b, ...args) {
  // rest operator
  console.log(args);
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}

console.log(addInfi(5, 5, 5));
