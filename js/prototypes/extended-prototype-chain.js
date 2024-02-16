#!/usr/bin/node

let person = {
  name: 'John',
  sayHello: function() {
    console.log('Hello, ' + this.name + '!');
  }
};

let student = Object.create(person);
let collegeStudent = Object.create(student);

collegeStudent.name = 'Bob';

// 'sayHello' is not found in 'collegeStudent', then in 'student', and finally in 'person'.
collegeStudent.sayHello(); // Outputs: Hello, Bob!
