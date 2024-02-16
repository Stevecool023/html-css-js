#!/usr/bin/node

/* A simple class definition */
function person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

person.prototype = {
  getFullName: function () {
    console.log(this.first + ' ' + this.last);
  },
  greet: function (other) {
    console.log("Hi " + other.first + ", I'm " + this.first + ".");
  }
};

var elodie = new person('Elodie', 'Jaubert', 27);
var christophe = new person('Christophe', 'Porteneuve', 30);
christophe.greet(elodie);
// Expected output: Hi Elodie, I'm Christophe

/* Pushing a little bit ahead */
function times(n, fx, arg) {
  for (var index = 0; index < n; ++index) {
    fx(arg);
  }
} times(3, christophe.greet, elodie);
// => Three times "Hi Elodie, I'm undefined."
times(1, elodie.getFullName);
// => "undefined undefined

/* Binding explicitely to solve the 'undefined' error */
// apply within
// Using apply
var fx = christophe.greet;
fx.apply(christophe, [elodie]);
// => "Hi Elodie, I'm Christophe."

// Using call
// Where as apply takes an array, call takes in arguments themselves thus feels nicer.
// var fx = christophe.greet;
fx.call(christophe, elodie);
// => "Hi Elodie, I'm Christophe."

/* Losing the shackles */
// Calling apply inside the function

function createBoundedWrapper(object, method) {
  return function () {
    return method.apply(object, arguments);
  };
}

var chrisGreet = createBoundedWrapper(christophe, christophe.greet);
chrisGreet(elodie);
// "Hi Elodie, I'm Christophe."

/* JavaScript frameworks do it as well. They are useful to ease DOM access.
   Again, our function 'createBoundedWrapper' may prove a bit unwieldy. */
// Prototype - has equipped functions with a bind method that lets you do just that.
var chrixxGreet = christophe.greet.bind(christophe);
chrixxGreet(elodie);
