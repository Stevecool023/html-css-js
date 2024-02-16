let person = { name: 'John' };

// Accessing a property
console.log(person.name); // Outputs: John

// Adding a method to the prototype
Object.prototype.sayHello = function() {
  console.log('Hello!');
};

person.sayHello(); // Outputs: Hello!
