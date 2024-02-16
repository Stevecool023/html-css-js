#!/usr/bin/node

/* hasOwnProperty */
// Checks if an object has a specific property as its own(not inherited).
let book = { title: 'The Hobbit', auther: 'J.R.R Tolkien' };
console.log(book.hasOwnProperty('title')); // Outputs: true
