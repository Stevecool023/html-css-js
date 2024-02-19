#!/usr/bin/node

/*
 * If there's an exception, the browser will look down the chain for .chatch() handlers or onRejected.
 * This is very much modeled after how synchronous code works.
 */

try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}
