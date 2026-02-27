const { add, subtract, multiply, divide} = require('./utils');

console.log("Name: Mosharef Hossain");
console.log("Today's date:", new Date().toLocaleDateString());

// Test calculator functions
console.log("5 + 3 =", add(5, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("5 * 3 =", multiply(5, 3));
console.log("5 / 0 =", divide(5, 0));