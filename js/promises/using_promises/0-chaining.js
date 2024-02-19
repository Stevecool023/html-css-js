#!/usr/bin/node

/* the classic callback pyramid of doom */

doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback)
