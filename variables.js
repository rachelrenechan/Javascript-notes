
// Variables 

// Initialize variables


// using var (undefined, for conditionals)
var greeting; 

// using let
let greeting;

// using const
const name = 'Rachel';
console.log(name); // prints Rachel in console.log
name = 'Sara'; 
console.log(name); // error in console log as const var cannot be reassigned

// using const with objects
const person = {
    name: 'John',
    age: 30
}
person.name = 'Sara';
person.age = 32;
console.log(person.name);
console.log(person.age); //chg data in obj is ok. mutatable 
