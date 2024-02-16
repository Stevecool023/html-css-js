#!/usr/bin/node

// A simple application for managing books.
// Create objects using constructor functions and demonstrate prototype-based inheritance.

// Constructor function for Book.
function Book(title, auther) {
  this.title = title;
  this.auther = auther;
}

// Adding a method to the prototype
Book.prototype.displayInfo = function() {
  console.log(`${this.title} by ${this.auther}`);
};

// Constructor function for EBook, inheriting from Book
function EBook(title, auther, format) {
  // Call the parent constructor
  Book.call(this, title, auther);
  this.format = format;
}

// Setting up prototype chain for inheritance
EBook.prototype = Object.create(Book.prototype);

// Adding a method specific to EBook
EBook.prototype.displayFormat = function() {
  console.log(`Format: ${this.format}`);
};

// Creating  instances of Book and EBook
let book1 = new Book('The Hobbit', 'J.R.R. Tolkien');
let ebook1 = new EBook('JavaScript: The Good Parts', 'Douglas Crockford', 'PDF');

// Using methods from prototypes
book1.displayInfo(); // Outputs: The Hobbit by J.R.R. Tolkien
ebook1.displayInfo(); // Outputs: JavaScript: The Good Parts by Douglas Crockford
ebook1.displayFormat(); // Outputs: Foramt: PDF
