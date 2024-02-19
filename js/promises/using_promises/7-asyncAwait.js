#!/usr/bin/node

/*
 * Using async/await can help one to write code that's more intuitive and resembles synchronous code.
 */

async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.josn();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
