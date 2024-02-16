Prototypes in JavaScript are fundamental part of the language's object-oriented nature.\n
At the core, a prototype is an object from which other objects inherit properties and methods.
- Every object in JavaScript has a prototype, forming a chain known as the prototype chain.
- When you access a property or method on an object, JavaScript looks for that property or method in the object itself.
If it doesn't find it, it looks in the object's prototype, and so on up the chain.\n

    Object Prototypes:
In JavaScript, every object is linked to a prototype object. When you create an object, it inherits properties and methods from its prototype. \n
The default prototype object for most is 'Object.prototype. This prototype, in turn, has its own properties and methods.\n

  Constructors and Prototypes:
In JavaScript, constructor functions are a way to create objects with a shared prototype.\n
They are special functions  used with the 'new' keyword to instantiate objects.\n
Constructor functions provide a blueprint for creating objects with similar properties and methods.

    Prototype Inheritance:
In JavaScript, inheritance is achieved through prototypes.\n
When a child object is created, it inherits properties and methods from its parent object's prototype.\n
This promotes code reuse and maintains a clear hierarchical structure.

    ES6 Classes and Prototypes:
ES6 introduced a more syntactically convenient way to work with prototypes using the 'class' keyword. \n
Despite the class syntax, JavaScript's inheritance is still prototype-based under the hood.\n
The 'class' syntax is essentially syntactic sugar for working with prototypes.

    Object.setPrototypeOf and Object.getPrototypeOf:
In JavaScript, you can manually set or get the prototype of an object using
'Object.setPrototypeOf' and 'Object.getPrototypeOf'. \n
This provides a way to control the prototype chain and extend or modify the behavior of objects.
