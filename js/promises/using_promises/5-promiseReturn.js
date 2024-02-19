#!/usr/bin/node

/* As a rule of thumb, whenever an operation encounters a promise,
 * return it and defer its handling to the next then handler.
 */

const listOfIngredients = [];

doSomething()
.then((url) => {
  // 'return' keyword must be included in front of the fetch call.
  return fetch(url)
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  });
})
.then(() => {
  console.log(listOfIngredients);
  // listOfIngredients will now contain data from fetch call.
});
