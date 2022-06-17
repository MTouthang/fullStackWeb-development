function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var x_value = doAddition(5);
var result = x_value(5);
console.log(result);

console.log(doAddition(5)(5));

doAddition()()(); // curring
