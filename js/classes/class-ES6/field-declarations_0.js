#!/usr/bin/node

/* Public properties */
class Rectangle {
  height = 0; // Declared with a default value
  width; // Defaults to undefined
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
