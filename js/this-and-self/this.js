#!/usr/bin/node

var john = {
  name: 'John',
  greet: function (person) {
    console.log("Hi " + person + ", my name is " + this.name);
  }
};john.greet("Mark");
// => "Hi Mark, my name is John"
