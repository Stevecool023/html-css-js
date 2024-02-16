/*
 * Callbacks, Promises, and Async/Await
 * Callbacks are one way to handle asynchronous operations, but Promises and Async/Await provide cleaner alternatives
 */

// Using Promises
function fetchData() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log("Data fetched!");
			resolve();
		}, 2000);
	});
}

fetchData()
	.then(function() {
		console.log("Promise resolved!");
	})
	.catch(function() {
		console.log("Promise rejected!");
	});

// Using Async/Await
async function fetchDataAsync() {
	await fetchData();
	console.log("Async/Await: Data fetched!");
}

fetchDataAsync();
