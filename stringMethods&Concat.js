// String Methods and Concatenation

// Concatenation
const firstName = 'Rachel';
const lastName = 'Chan';
let val;
val = firstName + lastName;
console.log(val);
val = firstName + ' ' + lastName;
console.log(val);

//Append
val = 'Rachel';
val += ' Chan';
console.log(val)

//Escaping
val = 'That\'s awesome, can\'t wait';

// Length
val = firstName.length;
console.log(val);

// concat method
val = firstName.concat(' ', lastName);
console.log(val)

//change case
val = firstName.toUpperCase();
console.log(val);
val = firstName.toLowerCase();
console.log(val);

// index, charAt
val= firstName[1];
console.log(val); //prints out a
val = firstName.indexOf('e');
console.log(val) //prints out 2
val = firstName.charAt('3');
console.log(val) //prints out h
val = firstName.charAt(firstName.length - 2);
console.log(val) //prints out e

//substring
val = firstName.substring(0,3);
console.log(val) //prints out Rac

// slice
val = firstName.slice(0,3);
console.log(val) //prints out Rac
val = firstName.slice(-3);
console.log(val) //prints out hel

// split
tags = 'web design, web dev, proogramming'
val = tags.split(',');
console.log(tags);
console.log(val);

// replace
fullName = 'Rachel Chan';
val = fullName.replace('Chan', 'Ng');
console.log(val);

// includes (to check if included)
fullName = 'Rachel Chan';
val = fullName.includes('Rachel');
console.log(val); //prins true
