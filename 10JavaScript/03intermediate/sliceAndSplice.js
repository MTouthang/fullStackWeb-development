var users = ["mang", "touthang", "kim", "vaiphei"];

//slice
console.log(users.slice(1, 3));
console.log(users.slice(1)); // slice out only one

// splice ,
users.splice(1, 3, "hi", "bye");
console.log(users);
