/*
 * A promise is an object which can be returned synchronously from an asynchronous function.
 * Promises can be used to avoid callback hell.
 */
const fetchingPosts = new Promise((res, rej) => {
	$.get("/posts")
	.done(posts => res(posts))
	.fail(err => rej(err));
});

fetchingPosts
.then(posts => console.log(posts))
.catch(err => console.log(err));
