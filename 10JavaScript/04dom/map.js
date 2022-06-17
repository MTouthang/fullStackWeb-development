var myMap = new Map();

myMap.set(1, "uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "Cuatro");

console.log(myMap);

// values mapping out
for (let value of myMap.values()) {
  console.log(value);
}

// key mapping out
for (let key of myMap.keys()) {
  console.log(key);
}

// mapping out both keys and value
for (let [key, value] of myMap) {
  console.log(`Key: ${key} value: ${value}`);
}

myMap.delete(2);
myMap.forEach((k, v) => console.log(`key ${k} value: ${v}`));
