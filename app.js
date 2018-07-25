var mathlib = require('./node_modules/mathlib')();     //notice the extra invocation parentheses!
console.log(mathlib);
mathlib.add(5,6);
mathlib.multiply(4,2);
mathlib.square(5);
mathlib.random(5,6);

