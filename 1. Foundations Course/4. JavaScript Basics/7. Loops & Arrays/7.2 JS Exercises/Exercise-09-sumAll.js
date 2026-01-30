// Implement a function that takes 2 positive integers and returns the sum of every integer between
// (and including) them:
const sumAll = function() {
    // Step 1: Find the minimum and maximum of the two arguments
    const min = Math.min(arguments[0], arguments[1]);

    // Step 2: Fin the maximum of the two arguments
    const max = Math.max(arguments[0], arguments[1]);

    // Step 3: Initialize sum variable
    let sum = 0;

    // Step 4: Loop from min to max (inclusive)
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    // Step 5: Return the total sum
    return sum;
};

console.log(sumAll(1, 4)); // returns the sum of 1 + 2 + 3 + 4 which is 10