// function functionName(params): ReturnType {
//   // logic
//   return value;
// }


// function add(a: number, b: number): number {
//   return a + b;
// }

// const result = add(5, 3); // result is type number
// console.log(result); // Output: 8

// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// const message = greet("Alice"); // message is type string
// console.log(message); // Output: Hello, Alice!  

function logMessage(message: string): void {
  return console.log(message);
}

logMessage("This is a log message."); // Output: This is a log message.
const result = logMessage("Hello"); // result is of type `void` (or `undefined`)
console.log(result); // undefined

// function multiply(a: number, b: number = 2): number {
//   return a * b;
// }
// console.log(multiply(5)); // Output: 10console.log(multiply(5, 3)); // Output: 15

// function concatenate(...strings: string[]): string {
//   return strings.join(" ");
// }   
// console.log(concatenate("Hello", "world!")); // Output: Hello world!console.log(concatenate("TypeScript", "is", "fun!")); // Output: TypeScript is fun!
// console.log(concatenate("Hello", "world!")); // Output: Hello world!
// console.log(concatenate("TypeScript", "is", "fun!")); // Output: TypeScript is fun!
// console.log(concatenate("Hello", "world!")); // Output: Hello world!
// console.log(concatenate("TypeScript", "is", "fun!")); // Output:
// // Output: TypeScript is fun! TypeScript is fun!        

// function divide(a: number, b: number): number | null {
//   if (b === 0) {
//     console.error("Division by zero is not allowed.");
//     return null;
//   }
//   return a / b;
// }       
// console.log(divide(10, 2)); // Output: 5
// console.log(divide(10, 0)); // Output: Division by zero is not allowed. null
// console.log(divide(10, 2)); // Output: 5
// console.log(divide(10, 0)); // Output: Division by zero is not allowed