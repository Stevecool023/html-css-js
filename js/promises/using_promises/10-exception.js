#!/usr/bin/node

/*
 * Nesting is a control structure.
 * As it limits the scope of catch statements,
 * when used correctly gives greater precision in error recovery.
 */

doSomethingCritical()
.then((result) =>
  doSomethingOptional(result)
  .then((optionalResult) => doSomethingExtranice(optionalResult))
  .catch((e) => {}),
) // Ignore if optional stuff fails; proceed.
.then(() => moreCriticalStuff())
.catch((e) => console.error(`Critical failure: $(e.message}`));
