#!/usr/bin/node

/*
 * If the previous handler started a promise but did not return it, there's no way to track its settlement anymore
 * and the promise is said to be floating.
 */

doSomething()
  .then((url) => {
    // 'return' keyword must be inserted
    return fetch(url);
  })
  .then((result) => {
    //result is a Response object
  });
