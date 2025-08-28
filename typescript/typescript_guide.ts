// Table of Contents

// What Is TypeScript?
// A superset of JavaScript that adds static types
// Why Use TypeScript?
// Prevent runtime bugs with static type checks
// Better IDE support (autocomplete, refactoring)
// Great for large codebases
// Optional and gradual typing


// Setting Up TypeScript
// npm install -g typescript
// tsc --init

// Basic Types
//variables
// let username: string = "Alice";
// let age: number = 30;
// let isAdmin: boolean = true;

//Arrays and tupples
// let colors: string[] = ["red", "blue"];
// let user: [string, number] = ["Bob", 25];

//Any and uknowns
// let anything: any = 5;
// let uncertain: unknown = "hello";

// Functions with Types
//  function greet(name: string): string {
//   return `Hello, ${name}`;
// }


// Objects and Interfaces
// let user: { name: string; age: number } = {
//   name: "Tom",
//   age: 22,
// };

// interface User {
//   name: string;
//   age: number;
//   isAdmin?: boolean; // optional
// }

// const user1: User = { name: "Alice", age: 28 };


// Type Aliases and Unions
//type aliases
// type ID = number | string;
// let userId: ID = 123;
// userId = "abc";

//Union & Literal Types:
// type Status = "pending" | "approved" | "rejected";
// let currentStatus: Status = "approved";



// Classes and Inheritance
// class Person {
//   constructor(public name: string, private age: number) {}

//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name: string, age: number, public grade: number) {
//     super(name, age);
//   }
// }



// Generics (Intro)
// function identity<T>(value: T): T {
//   return value;
// }

// let output = identity<string>("hello");
