//for loop example
function printWithForLoop(items: string[]): void {
  for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i}: ${items[i]}`);
  }
}
printWithForLoop(['apple', 'banana', 'cherry']);


//while loop example
function printWithWhileLoop(items: string[]): void {
  let i = 0;
  while (i < items.length) {
    console.log(`Item ${i}: ${items[i]}`);
    i++;
  }
}
printWithWhileLoop(['dog', 'cat', 'rabbit']);


//do-while loop example
function printWithDoWhileLoop(items: string[]): void {
  let i = 0;
  if (items.length === 0) return;

  do {
    console.log(`Item ${i}: ${items[i]}`);
    i++;
  } while (i < items.length);
}
printWithDoWhileLoop(['red', 'green', 'blue']);

//for...of loop
function printWithForOfLoop(items: string[]): void {
  for (const item of items) {
    console.log(`Item: ${item}`);
  }
}
printWithForOfLoop(['pen', 'pencil', 'eraser']);


//for...in loop (Best for object keys)
function printWithForInLoop(obj: { [key: string]: string | number }): void {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
printWithForInLoop({ name: 'Alice', age: 25, city: 'Paris' });



//Example with Type Interface
interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'John', age: 28 },
  { name: 'Jane', age: 34 }
];

for (const user of users) {
  console.log(`${user.name} is ${user.age} years old`);
}
