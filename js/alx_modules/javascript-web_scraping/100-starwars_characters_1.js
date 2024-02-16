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
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      const filmData = JSON.parse(body);

      // Iterate over the characters and fetch their details
      const characterDetails = (characterUrl) => {
        request.get(characterUrl, (characterError, characterResponse, characterBody) => {
          if (characterError) {
            console.error('Character Error:', characterError.message);
          } else {
            try {
              const characterName = JSON.parse(characterBody);

              // Print the character's name
              console.log(characterName.name);
            } catch (characterParseError) {
              console.error('Error Parsing Character:', characterParseError.message);
            }
          }
        });
      }

      // Call the characterDetails function and output character names in the order they appear in the '/films/' response.
      filmData.characters.forEach(characterDetails);
    } catch (parseError) {
      console.error('Error Parsing response:', parseError.message);
    }
  }
});
