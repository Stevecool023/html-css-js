#!/usr/bin/node

// In object literals

const parent1 = { prop: 1 };
const parent2 = { prop: 2 };

const child = {
  myParent() {
    console.log(super.prop);
  },
};

Object.setPrototypeOf(child, parent1);
child.myParent(); // Logs "1"

const myParent = child.myParent;
myParent(); // Slill logs "1"

const anotherChild = { __proto__: parent2, myParent };
anotherChild.myParent(); // Still logs "1"
