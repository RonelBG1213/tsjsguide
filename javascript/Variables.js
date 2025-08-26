
let = 10; //number                             
let str = "Hello"; //string
let isTrue = false; //boolean
let arr = [1, 2, 3]; //array
let obj = { name: "Alice", age: 25 }; //object
let undef; //undefined
let nul = null; //null
// let sym = Symbol("id"); //symbol
// let bigIntNum = 9007199254741991n; //bigint




//javascript variables
var globalVar = "I am a global variable"; // Function-scoped variable
let blockVariable = "I am a block-scoped variable"; // Block-scoped variable
const constantVar = "I am a constant variable"; // Block-scoped constant

var globalVar = "I am global";

function example() {
  var localVar = "I am local";

  console.log(globalVar); // ✅ Accessible
  console.log(localVar);  // ✅ Accessible
}

example();

console.log(globalVar); // ✅ Accessible
console.log(localVar);  // ❌ Error: localVar is not defined


function demoVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ Works: 10
}
demoVar();



function demoLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ❌ ReferenceError: y is not defined
}
demoLet();


function demoConts() {
  if (true) {
    const n = 20;
  }
  console.log(n); // ❌ ReferenceError: n is not defined
}
demoConts();



//  constantVar = "Trying to change"; // Error: Assignment to constant variable 
console.log(globalVar); // Output: I am a global variable
console.log(blockVariable); // Output: I am a block-scoped variable
console.log(constantVar); // Output: I am a constant variable
if (true) {
  var functionVar = "I am accessible outside this block"; // Function-scoped variable
  let innerBlockVar = "I am NOT accessible outside this block"; // Block-scoped variable
  const innerConstVar = "I am also NOT accessible outside this block"; // Block-scoped constant
  console.log(functionVar); // Output: I am accessible outside this block
  console.log(innerBlockVar); // Output: I am NOT accessible outside this block
  console.log(innerConstVar); // Output: I am also NOT accessible outside this block
} 
console.log(functionVar); // Output: I am accessible outside this block
// console.log(innerBlockVar); // Error: innerBlockVar is not defined 
// console.log(innerConstVar); // Error: innerConstVar is not defined
// Function demonstrating variable scopes
function variableScopes() {
  var funcVar = "I am a function-scoped variable"; // Function-scoped variable
  let funcBlockVar = "I am a block-scoped variable"; // Block-scoped variable
  const funcConstVar =  "I am a constant variable"; // Block-scoped constant
  console.log(funcVar); // Output: I am a function-scoped variable
  console.log(funcBlockVar); // Output: I am a block-scoped variable
  console.log(funcConstVar); // Output: I am a constant variable
}
variableScopes();
// console.log(funcVar); // Error: funcVar is not defined
// console.log(funcBlockVar); // Error: funcBlockVar is not defined 
// console.log(funcConstVar); // Error: funcConstVar is not defined
// Demonstrating hoisting with var

console.log(hoistedVar); // Output: undefined (due to hoisting)
var hoistedVar = "I am hoisted";
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoisted 



// Arithmetic Operators
let x = 10;
let y = 3;
console.log(x + y); // Addition: 13
console.log(x - y); // Subtraction: 7
console.log(x * y); // Multiplication: 30
console.log(x / y); // Division: 3.3333
console.log(x % y); // Modulus: 1
console.log(x ** y); // Exponentiation: 1000
// Assignment Operators
let a1 = 5;
a1 += 3; // a1 = a1 + 3
console.log(a1); // 8
a1 -= 2; // a1 = a1 - 2 
console.log(a1); // 6
a1 *= 4; // a1 = a1 * 4 
console.log(a1); // 24
a1 /= 3; // a1 = a1 / 3
console.log(a1); // 8
a1 %= 5; // a1 = a1 % 5
console.log(a1); // 3

// Comparison Operators
console.log(x == y); // Equal: false
console.log(x != y); // Not equal: true
console.log(x === y); // Strict equal: false
console.log(x !== y); // Strict not equal: true
console.log(x > y); // Greater than: true
console.log(x < y); // Less than: false
console.log(x >= y); // Greater than or equal: true
console.log(x <= y); // Less than or equal: false

// Logical Operators
console.log(x > 5 && y < 5); // AND: true
console.log(x > 5 || y > 5); // OR: true
console.log(!(x > 5)); // NOT: false

// String Operators 
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Concatenation: Hello World
console.log(str1 += " Everyone"); // Concatenation assignment: Hello Everyone

// Type Operators
console.log(typeof x); // Type of x: number
console.log(typeof str1); // Type of str1: string
console.log(x instanceof Number); // Instance of Number object: false
console.log(str1 instanceof String); // Instance of String object: false

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes

// Comma Operator
let m = 1;
m = (m++, m + 10);
console.log(m); // Output: 12

// Unary Operators
let n = 5;
console.log(++n); // Pre-increment: 6
console.log(n++); // Post-increment: 6
console.log(n); // 7
console.log(--n); // Pre-decrement: 6
console.log(n--); // Post-decrement: 6
console.log(n); // 5

// Bitwise Operators
let p = 5; // 0101 in binary
let q = 3; // 0011 in binary
console.log(p & q); // AND: 1 (0001)
console.log(p | q); // OR: 7 (0111) 
console.log(p ^ q); // XOR: 6 (0110)
console.log(~p); // NOT: -6 (inverts bits)
console.log(p << 1); // Left shift: 10 (1010)
console.log(p >> 1); // Right shift: 2 (0010)
console.log(p >>> 1); // Unsigned right shift: 2 (0010)

// Spread Operator
let arr2 = [1, 2, 3];
let arr3 = [...arr2, 4, 5];
console.log(arr3); // Output: [1, 2, 3, 4, 5]
let obj2 = { a: 1, b: 2 };
let obj3 = { ...obj2, c: 3 };
console.log(obj3); // Output: { a: 1, b: 2, c: 3 }

// Destructuring Assignment
let [first, second] = arr2;
console.log(first, second); // Output: 1 2 
let { a: alpha, b: beta } = obj2;
console.log(alpha, beta); // Output: 1 2 