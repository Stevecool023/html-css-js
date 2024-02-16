#!/usr/bin/node

class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new point(5, 5);
const p2 = new point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(point.displayName); // "point"
console.log(point.distance(p1, p2)); // 7.071...
