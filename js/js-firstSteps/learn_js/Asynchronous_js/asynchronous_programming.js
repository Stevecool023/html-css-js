/*
 * Understanding Asynchronous Programming
 * JavaScript is single-threaded, but it can handle asynchronous tasks using callbacks, promises, and async/await.
 */

// Asynchronous programming with callbacks
function fetchData(callback) {
	setTimeout(function() {
		console.log("Data fetched!");
		callback();
	}, 2000);
}

fetchData(function() {
	console.log("Callback executed!");
});
