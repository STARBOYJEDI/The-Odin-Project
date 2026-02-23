const person = {
    name: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
    bio() {
        // 'this' refers to the object the method belongs to - in this case, person
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} 
            years old.`);
    },
    // function that logs a greeting
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`); // this prints "Hi! I'm Bob"
    },
};

// Shorter and more efficient 

