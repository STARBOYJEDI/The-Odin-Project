const person = {
    name: ["Bob", "Smith"], // an array that holds 2 strings
    age: 32,
    bio: function () {
        // 'this' refers to the object the method belongs to - in this case, person
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age}
            years old.`);
    },
    // function that logs a greeting
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};