var countries = ["india", "USA", "japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam ");

console.log(states[0]);
console.log(states.length);

states[0] = "Manipur";

console.log(states);

var user = ["Mang", "mang@gmail.com", 3, 35, true];
console.log(user);

user.pop();
user.unshift("new value"); // adding item in index 0
user.shift(); // removing item in the first position of array

console.log(user.indexOf(3));
