// Implement a function that takes an array and some other arguments then removes the other
// arguments from that array, and returns the resulting array:
const removeFromArray = function() {
    // Step 1: Get the array (first argument)
    const array = arguments[0]; // [1, 2, 3, 4]

    // Step 2: Get items to remove (all arguments after the first)
    const toRemove = Array.from(arguments).slice(1);

    // Step 3: Filter out items that are in toRemove
    return array.filter(item => !toRemove.includes(item));
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // should remove 3 and return [1, 2, 4]

