#!/usr/bin/node

/* Setting Prototype for a 'persianCat': */

let cat = {
  meow: function() {
    console.log('Meow!');
  }
};

let persianCat = {}

// Setting the prototype of persianCat to cat
Object.setPrototypeOf(persianCat, cat);

// Now persianCat inherits the meow method
persianCat.meow(); // Outputs: Meow!

// Getting the Prototype:
let prototypeOfPersianCat = Object.getPrototypeOf(persianCat);
console.log(prototypeOfPersianCat === cat); // Outputs: true
