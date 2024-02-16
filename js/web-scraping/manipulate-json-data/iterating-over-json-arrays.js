#!/usr/bin/node

/* If a JSON contains arrays, one can iterate over them using loops. */

const jsonArray = '[{"name":"John"},{"name":"Jane"},{"name":"Doe"}]';

const arrayOfObjects = JSON.parse(jsonArray);

// Iterating over the array
arrayOfObjects.forEach(person => {
  console.log(person.name);
});

/* Transformin JSON: */
/* Using methods like 'map' or 'filter' to transform JSON arrays or objects. */

// Filtering JSON array
const filteredArray = arrayOfObjects.filter(person => person.name !== 'Jane');
console.log(filteredArray);

// Mapping JSON array
const mappedArray = arrayOfObjects.map(person => ({fullName: person.name + ' Doe' }));
console.log(mappedArray);
