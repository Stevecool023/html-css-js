#!/usr/bin/node

/* This script prints the number of movies where the character "Wedge Antilles" is present. */

// The first argument is the API URL of the Star Wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - the script myst use this ID for filtering the result of the API
// Must use the module request.

const request = require('request');

const apiUrl = process.argv[2];
const character_id = 18;

if (!apiUrl) {
  console.error('Usage: node 4-starwars_count.js <API URL>');
  process.exit(1);
}

// Performing a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      const data = JSON.parse(body);
      // Filtering films where Wedge Antilles is present
      const WedgeFilms = data.results.filter(film =>
        film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${character_id}/`)
      );
      // Displaying the count of the movies
      console.log(WedgeFilms.length);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});
