tipper("45");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

/** error -- */
// bigTip("200"); //since var bigTip is declare undefine in the global context

// var bigTip = function (a) {
//   var bill = parseInt(a);
//   console.log(bill + 5);
// };

// correct
var bigTip = function (a) {
  var bill = parseInt(a);
  console.log(bill + 5);
};
bigTip("200"); // var with the argument should be pass after function definition

console.log(name); //undefined--
var name = "mang";

function sayName() {
  var name = "MR. H";
  console.log(name);
}
sayName();

console.log(name);
