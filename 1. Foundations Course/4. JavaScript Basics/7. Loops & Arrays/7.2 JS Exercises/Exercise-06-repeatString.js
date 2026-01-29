// const hey = 'hey'; // Define 'hey' as a variable

// const repeatString = function(string, num) {
//     return string.repeat(num);
// };

// repeatString(hey, 3); // returns 'heyheyhey'


// Solution
const repeatString = function (word, times) {
    if (times < 0) return "ERROR"; // Checks if times is negative
    let string = ""; // Creates an empty string to store the result
    for (let i =0; i < times; i++) {
        string += word;
    }
    return string;
};

module.exports = repeatString;