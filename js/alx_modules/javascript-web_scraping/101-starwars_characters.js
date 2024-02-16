#!/usr/bin/node

/*
 * Script that prints all characters of a Star Wars movie
 * The first argument is the Movie ID - example: 3 = "Return of the Jedi"
 * Display one character name by line "in the same order of the list 'characters' in the '/films/' response"
 * Must use the Star Wars API
 * Must use the 'request' module.
 */
 
const request = require('request');

const movie_id = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movie_id}`;

if (!movie_id) {
  console.error('Usage: node 101-starwars_characters.js <MOVIE ID>');
}

// Make a GET Request
request.get(apiUrl, (error, response, body) => {
  if (!error) {
    try {
      const characterUrls = JSON.parse(body).characters;

      printCharacters(characterUrls, 0);
    } catch (parseError) {
      console.error('Error parsin JSON:', parseError.message);
    }
  } else {
    console.error('Error:', error.message);
  }
});

// Define a recursive function printCharacters to asynchronously handle printing the characters one after the other in the order they appear.

function printCharacters(characters, index) {
  request.get(characters[index], (charError, charResponse, charBody) => {
    if (!charError) {
      try {

        // Output character name
        console.log(JSON.parse(charBody).name);
        
        // Make the function recursive by calling itself again
        if (index < characters.length - 1) {
          printCharacters(characters, index + 1);
        }

      } catch (charParseError) {
        console.error('Error parsing character name:', charParseError.message);
      }
    } else {
      console.error('Character Error:', charError.message);
    }
  });
}
