#!/usr/bin/node

var john = {
  name: 'John',
  greet: function (person) {
    console.log("Hi " + person + ", my name is " + this.name);
  }
};var fx = john.greet;
fx("Mark");
