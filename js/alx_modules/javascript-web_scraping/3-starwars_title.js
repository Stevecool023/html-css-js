#!/usr/bin/node

/* Print the title of a Star Wars movie where the episode matches the given integer. */

// The first argument is the movie ID
// One must use the Star Wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
// One must use the module request.

const request = require('request');

const movie_id = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movie_id}`;

if (!movie_id) {
  console.error('Usage: node 3-starwars_title.js <movie ID>');
  process.exit(1);
}

// Performing a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      const movieData = JSON.parse(body);
      // Displaying the title of the movie
      console.log(movieData.title);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});
