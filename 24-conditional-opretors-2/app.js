var num = 42;
var num1 = 24;
var num2 = 50;
var num3 = 60;
var name1 = '60';
var name2 = '50';
console.log('is num > num1 ? =', num > num1);
console.log('is num1 > num ? = ', num1 > num);
console.log('is num2 > num1 ? =', num2 > num1);
console.log('is num3 > num1 ? =', num3 > num1);
console.log('is num3 > num2 ? =', num3 > num2);
console.log('is num 1 > num3 ? =', num1 > num3);
console.log('is num2 > num3 ? =', num2 > num3);
console.log('is num => num1 ? =', num >= num1);
console.log('is num <= num1 ? =', num <= num1);
console.log('is num2 >= num1 ? =', num2 >= num1);
console.log('is num3 >= num1 ? =', num3 >= num1);
console.log('is num2 >= num3 ? =', num2 >= num3);
// Tests for equality and inequality with strings
console.log('is name2 === name1 ?= ', name2 === name1);
// Tests using the lower case and upper case function
var name3 = 'javed';
var name4 = 'JAVED';
console.log('is name3 === name4 ?= ', name3 === name4);
console.log('is name3 == name4 ?= ', name3 == name4);
// Tests using "and" and "or" operators
if (num > num1 && num < num3) {
    console.log("Number is between num1 and num3");
}
else if (num == num1 || num == num3) {
    console.log("Number is equal to either num1 or num3");
}
else {
    console.log("Neither of the above conditions are true");
}
;
// Test whether an item is in a array
// Define an array
var myArray = [1, 2, 3, 4, 5];
// Item to test
var numToTest = 3;
var num1ToTest = 9;
// Test if item is in the array
if (myArray.includes(numToTest)) {
    console.log("".concat(numToTest, " is in the array."));
}
else {
    console.log("".concat(numToTest, " is not in the array."));
}
// Test whether an item is not in a array
if (myArray.includes(num1ToTest)) {
    console.log("".concat(num1ToTest, " is in the array."));
}
else {
    console.log("".concat(num1ToTest, " is not in the array."));
}
