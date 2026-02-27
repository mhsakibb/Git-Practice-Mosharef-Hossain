const { add, subtract, multiply} = require('./utils');

console.log("Name: Mosharef Hossain");
console.log("Today's date:", new Date().toLocaleDateString());

// Test calculator functions
console.log("5 + 3 =", add(5, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("5 * 3 =", multiply(5, 3));