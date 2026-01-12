// We can pass arbitrary data to functions using parameters.

function showMessage5(from, text) { // parameters: from, text
    alert(from + ': ' + text);
}

showMessage5('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage5('Ann', "What's up?"); // Ann: What's up? (**)
// When the function is called in lines (*), (**), the given values are copied to the local variables from and text.

//Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:
function showMessage6(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    alert( from + ': ' + text );
}

let from = "Ann";

showMessage6(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann












