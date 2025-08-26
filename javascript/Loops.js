// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
} // Output: 0 1 2 3 4

// While Loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
} // Output: 0 1 2 3 4

// Do-While Loop
let cnt = 0;
do {
  console.log(cnt);
  cnt++;
} while (cnt < 5); // Output: 0 1 2 3 4

// For...of Loop
let arr1 = [10, 20, 30];
for (let value of arr1) {
  console.log(value);
} // Output: 10 20 30

// For...in Loop
let obj1 = { a: 1, b: 2, c: 3 };
for (let key in obj1) {   
  console.log(`${key}: ${obj1[key]}`);
} // Output: a: 1 b: 2 c: 3