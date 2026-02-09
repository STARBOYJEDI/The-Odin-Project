// Method 2
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hello World");
// });

// Method 3
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
});

// Extra properties of event objects
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
});

// Attaching listeners to groups of nodes
// buttons is a node list. It looks and acts much like an array
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

