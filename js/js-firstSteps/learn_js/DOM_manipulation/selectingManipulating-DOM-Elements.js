/*
 * JavaScript can be used to select and manipulate HTML elements dynamically.
 */

// Selecting and manipulating DOM elements
let paragraph = document.querySelector("p");
paragraph.style.color = "blue"; // Changing CSS property

let newElement = document.createElement("div");
newElement.textContent = "I'm a new element!";
document.body.appendChild(newElement); // Appending a new element
