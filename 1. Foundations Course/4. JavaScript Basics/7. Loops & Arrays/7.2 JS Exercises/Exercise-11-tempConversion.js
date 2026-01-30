// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice vers:
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
const convertToCelsius = function(degreesF) {
    const celsius = (degreesF - 32) * 5/9;
    return round(celsius, 1) + '°C'; // Round to 1 decimal place
};
console.log(convertToCelsius(32)); // 0.0
console.log(convertToCelsius(68)); // 20.0

//     convertToCelsius,
//     convertToFahrenheit
// };