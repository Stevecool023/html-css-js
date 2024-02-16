#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // Create an empty objct.
      Object.create(null);
    }
  };

  print() {
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += 'X';
      }
      console.log(row);
    }
  };

  rotate() {
    let a = this.width;
    let b = this.height;
    this.width = b;
    this.height = a;
    return { width: this.width, height: this.height }
    // OR
    // [this.width, this.height] = [this.height, this.width];
  };

  double() {
    this.width *= 2;
    this.height *= 2;
    /* OR */
    // Use map to double width and height
    // [this.width, this.height] = [this.width, this.height].map(valure => value * 2);
    return { width: this.width, height: this.height }
  };
}

module.exports = Rectangle;
