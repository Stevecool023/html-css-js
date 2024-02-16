#!/usr/bin/node
const Square5 = require('./5-square');

class Square extends Square5 {
  constructor(size) {
    super(size);
  };

  charPrint(c) {
    // Set default character to be used
    const char = c || 'X';
    // Loop to output char
    for (let i = 0; i < this.width; i++) {
      console.log(char.repeat(this.height));
    }
  };
}

module.exports = Square;
