#!/usr/bin/node

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cow extends Animal {
  constructor(name) {
    super(name);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

const a = new Animal("Cat");
a.speak(); // Cat makes a noise

const c = new Cow("Abudance");
c.speak(); // Abudance makes a noise
