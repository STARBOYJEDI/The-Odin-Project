// const grandparent = document.getElementById("grandparent-id"); // creates a reference to the grandparent div
// const grandparent = document.querySelector("#grandparent-id"); // creates a reference to the grandparent div
// const parents = Array.from(document.getElementsByClassName("parent")); // creates an array of the parent divs
// grandparent.style.backgroundColor = "blue"; // changes the background color of the grandparent div
// const parents = Array.from(document.getElementsByClassName("parent")); // creates an array of the parent divs
//const grandparent = document.querySelector(".grandparent");
// parents.forEach(changeColor);
// const parent = document.querySelector(".parent"); // selects the first parent div
// const parents = document.querySelectorAll(".parent"); // selects all parent divs
// parents.forEach(changeColor); // changes the background color of all parent divs
// changeColor(parent); 
const grandparent = document.querySelector(".grandparent");
const parents = Array.from(grandparent.children); // gets the child elements of the grandparent div

parents.forEach(changeColor); // changes the background color of all parent divs

function changeColor(element) {
    element.style.backgroundColor = "#333"
}









