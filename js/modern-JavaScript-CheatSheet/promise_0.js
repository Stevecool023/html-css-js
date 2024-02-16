/* 
 * Use promises to handle an Ajax request to fetch the resource X.
 * Create the promise
 * We firstly are going to create a promise.
 * We will use the jQuery get method to do our Ajax request to X.
 */
const xFetcherPromise = new Promise( // Create promise using "new" keyword and store it into a variable.
	function(resolve, reject) { // Promise constructor takes a function parameter which has resolve and reject parameters itself.
		$.get("X") // Launch the Ajax request
		.done(function(X) { // Once the request is done ...
			resolve(X); // ...resolve the promise with the X value as parameter
		})
		.fail(function(error) { // If the request has failed...
			reject(error); // ...reject the promise with the error as parameter
		});
	}
)

/*
 * Promise handlers usage
 * To get the promise result (or error), we must attatch to it handlers by doing the following:
 */
xFetcherPromise
.then(function(X) {
	console.log(X);
})
.catch(function(err) {
	console.log(err)
})
