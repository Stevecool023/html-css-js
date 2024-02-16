#!/usr/bin/node

// One cannot use the dellet operator and super.prop or super[expr] to delete
// a parent class' property -- it will throw a ReferenceError.

class Base {
  foo() {}
}

class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
