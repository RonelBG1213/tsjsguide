//javascript arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // Output: 3
console.log(fruits[0]); // Output: Apple
fruits.push("Date"); // Add to end
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]
fruits.pop(); // Remove from end
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
fruits.unshift("Mango"); // Add to start  
console.log(fruits); // Output: ["Mango", "Apple", "Banana", "Cherry"]
fruits.shift(); // Remove from start
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
console.log(fruits.indexOf("Banana")); // Output: 1
console.log(fruits.includes("Cherry")); // Output: true
fruits.forEach((fruit) => console.log(fruit)); // Output: Apple Banana Cherry
let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // Output: ["APPLE", "BANANA", "CHERRY"]
let filteredFruits = fruits.filter((fruit) => fruit.startsWith("B"));
console.log(filteredFruits); // Output: ["Banana"]
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log(totalLength); // Output: 16

// Sort
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
// Reverse
fruits.reverse();
console.log(fruits); // Output: ["Cherry", "Banana", "Apple"]
// Join
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: "Cherry, Banana, Apple"
// Slice
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Banana", "Apple"]
// Splice
fruits.splice(1, 1, "Blueberry");
console.log(fruits); // Output: ["Cherry", "Blueberry", "Apple"]
// Concat
let moreFruits = fruits.concat(["Date", "Elderberry"]);
console.log(moreFruits); // Output: ["Cherry", "Blueberry", "Apple", "Date", "Elderberry"]
// Find 
let foundFruit = fruits.find((fruit) => fruit.startsWith("B"));
console.log(foundFruit); // Output: "Blueberry"
// FindIndex
let foundIndex = fruits.findIndex((fruit) => fruit.startsWith("A"));
console.log(foundIndex); // Output: 2 
// Every
let allHaveE = fruits.every((fruit) => fruit.includes("e"));
console.log(allHaveE); // Output: true
// Some
let someHaveB = fruits.some((fruit) => fruit.startsWith("B"));
console.log(someHaveB); // Output: true
// Flat
let nestedArr = [1, [2, [3, 4]], 5];
let flatArr = nestedArr.flat(2);
console.log(flatArr); // Output: [1, 2, 3, 4, 5]
// FlatMap
let words = ["hello world", "foo bar"];
let flatMapped = words.flatMap((word) => word.split(" "));
console.log(flatMapped); // Output: ["hello", "world", "foo", "bar"]
// Fill
let filledArr = new Array(5).fill(0);
console.log(filledArr); // Output: [0, 0, 0, // 0, 0]
// From
let strArr = Array.from("hello");
console.log(strArr); // Output: ["h", "e", "l", "l", "o"]
// Of
let numArr = Array.of(1, 2, 3);
console.log(numArr); // Output: [1, 2, 3]