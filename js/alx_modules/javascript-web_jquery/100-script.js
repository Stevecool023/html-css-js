#!/usr/bin/node

/*
 * script that updates the text color of the '<header>' element to red (#FF0000):
 * must use 'document.querySelector' to select HTML tag
 * can't use the jQuery API
 * Note: script must be imported from the '<head>' tag, not at the end of the HTML
 */

// When the whole has loaded
/* document.addEventListener("DOMContentLoaded", function() { */
window.onload = function() {
  const header = document.querySelector("header");
  header.style.color = '#FF0000';
};
