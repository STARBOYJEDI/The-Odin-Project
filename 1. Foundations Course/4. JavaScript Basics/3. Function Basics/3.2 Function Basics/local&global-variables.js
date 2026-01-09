function showMessage1() {
    let message1 = "Hello, I'm JavaScript!"; // local variable

    alert( message1 );
}
showMessage1(); // Hello, I'm JavaScript!
alert( message1 ); // <-- Error! The variable is local to the function

// A function can access outer variables

let userName2 = "John";
function showMessage2() {
    let message2 = 'Hello, ' + userName2; // message uses the outer variable
    alert(message2);
}
showMessage2(); // Hello, John

// The function can modify the outer variable
let userName3 = 'John';
function showMessage3() {
    userName3 = "Bob"; // (1) changed the outer variable"
    let message3 = 'Hello, ' + userName3;
    alert(message3);
}
alert( userName3 ); // John before the function call
showMessage3();
alert( userName3 ); // Bob, the value was modified by the function

// If there's a local variable with the same name, it shadows the outer one.
let userName4 = 'John';
function showMessage4() {
    let userName4 = "Bob"; // declare a local variable

    let message4 = 'Hello, ' + userName4; // Bob
    alert(message4);
}
// the function will create and use its own userName4
showMessage4();
alert( userName4 ); // John, unchanged, the function did not access the outer variable




