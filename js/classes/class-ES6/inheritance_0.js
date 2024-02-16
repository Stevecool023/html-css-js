#!/usr/bin/node

/*
 * If there is a constructor present in the subclass, it needs to first call super()
   before using 'this'.
 * The 'super' keyword can also be used to call corresponding methods of super class.
 */

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const f = new Lion("Fuzzy");
f.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

class Cheetah extends Cat {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const l = new Cheetah("Lenny");
l.speak();
