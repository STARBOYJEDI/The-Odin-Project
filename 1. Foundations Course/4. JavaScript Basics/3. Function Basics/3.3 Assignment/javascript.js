// 1. Write a function called add7 that takes a number as a parameter and returns that number + 7.
function add7(num) {
    return num + 7;
}
console.log(add7(10)); 

// 2. Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(3, 4));

// 3. Write a function called capitalize that takes a string and returns that string with only
// the first letter capitalized. Make sur that it can take strings that
//are lowercase, UPPERCASE or BOTH.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));

// 4. Write a function called lastLetter that takes a string and returns the very last letter of that string.
function lastLetter(str) {
    return str.charAt(str.length -1);
}
console.log(lastLetter("abcd"));



