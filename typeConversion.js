//Type Conversion

//no to string
let val;
val = 4 + 4;
console.log(typeof val); //prints out number
val = String(4+4);
console.log(typeof val); //prints out string

//Boolean to string
val = String(true);
console.log(val.length); //prints out 4

// alt method to String()
val = (5).toString();
console.log(typeof val); //prints out string

// String to no
val = Number('5');
console.log(val); //prints out 5
val = Number(true); 
console.log(val); //prints out 1
val = Number(false);
console.log(val); //prints out 0
val = Number(null);
console.log(val); //prints out 0
val = Number('hello');
console.log(val); //prints out NaN
console.log(typeof val)

// alt method to Number()
val = parseInt('100');
console.log(typeof val);
