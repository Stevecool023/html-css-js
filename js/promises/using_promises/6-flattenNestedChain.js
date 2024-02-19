#!/usr/bin/node

/*
 * One can flatten the nested chain into a single chain,
 * which is simpler and makes error handling easier.
 */
doSomething()
.then((url) => fetch(url))
.then((res) => res.json())
.then((data) => {
  listOfIngredients.push(data);
})
.then(() => {
  console.log(listOfIngredients);
});
