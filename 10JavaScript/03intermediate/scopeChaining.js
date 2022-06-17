var name = "Mang";

console.log("Line 3 is: ", name);

function sayName() {
  var name = "Mr M";
  console.log("line 8 name:", name);
  sayNameTwo();

  function sayNameTwo() {
    console.log("line 10 name: ", name);
  }
}

sayName();
