function Calculator() {
    
    this.methods = {
        "-": (a, b) => a - b, // Stores operators as keys with their corresponding functions 
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) { // Validates: operator exists, and both numbers are valid
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) { // Allows adding new operations dynamically
        this.methods[name] = func;
    };
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") );

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


