/*
 * Parse(): Accepts a JSON string as a parameter,
 * and returns the corresponding JavaScript object.
 * Retrieve the response as text rather than JSON,
 * by calling the text() method of the response.
 * Then use parse() to convert the text to a JavaScript object.
 */
async function populate() {
	const requestURL =
		"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
	const request = new Request(requestURL);

	const response = await fetch(request);
	const superHeroesText = await response.text();

	const superHeroes = JSON.parse(superHeroesText);
	populateHeader(superHeroes);
	populateHeroes(superHeroes);
}
