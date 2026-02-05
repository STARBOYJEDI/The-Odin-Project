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
// const parents = Array.from(grandparent.children); // gets the child elements of the grandparent div
// const grandparent = document.querySelector(".grandparent");
// changeColor(grandparent); // changes the background color of the grandparent div

// const grandparent = document.querySelector(".grandparent"); // creates a reference to the grandparent div
// const parents = Array.from(grandparent.children); // gets the child elements of the grandparent div
// const parentOne = parents[0] // selects the first parent div
// const children = parentOne.children; // gets the child elements of the first parent div
// changeColor(children[0]); // changes the background color of the first child div of the first parent div
// parents.forEach(changeColor); // changes the background color of all parent divs

// const grandparent = document.querySelector(".grandparent"); // creates a reference to the grandparent div
// // const childOne = grandparent.querySelector(".child"); // selects the first child div of the grandparent div
// const children = grandparent.querySelectorAll(".child"); // selects all child divs of the grandparent div

// children.forEach(changeColor); // changes the background color of all child divs of the grandparent div
// // changeColor(childOne); // changes the background color of the first child div of the grandparent div

// const childOne = document.querySelector("#child-one"); // references the child-one div in the 1st parent div class
// const parent = childOne.parentElement // references the first parent div class
// const grandparent = parent.parentElement // reference the grandparent div class

const childOne = document.querySelector("#child-one");
// const grandparent = childOne.closest(".grandparent"); 
const childTwo = childOne.nextElementSibling; // references the second child div in the first parent div class

changeColor(childTwo); // changes the background color of the second child div in the first parent div class

function changeColor(element) {
    element.style.backgroundColor = "purple"
}









