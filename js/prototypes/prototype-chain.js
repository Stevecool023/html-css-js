#!/usr/bin/node

let person = {
  name: 'John',
  sayHello: function() {
    console.log('Hello, ' + this.name + '!');
  }
};

let student = Object.create(person);
student.name = 'Alice';

// When 'sayHello' is not found in 'student', JavaScript looks up the prototype chain and finds it in 'person'.
student.sayHello(); // Outputs: Hello, Alice!
