#!/usr/bin/node

// Setting super.prop sets the property on this instead

class A {}
class B extends A {
  setX() {
    super.x = 1;
  }
}

const b = new B();
b.setX();
console.log(b); // B { x: 1 }
console.log(Object.hasOwn(b, "x")); // true
