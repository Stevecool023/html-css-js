#!/usr/bin/node

/*
 * Print all characters of a starwars movie
 * First argument is the movie ID = example: 3 = "Return of the Jedi"
 * Display one character name by line
 * Must use the Star Wars API
 * Must use the module 'request'
 */

const request = require('request');

// Define the first argument
const movie_id = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movie_id}`;

// Make a GET request.
request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    try {
      const characterData = JSON.parse(body);

      const characters = characterData.characters;
      
      for (const character of characters) {
        request.get(character, (error, Info, data) => {
          if (error) {
            console.error('Name Error:', error.message);
          } else {
            try {
              const person = JSON.parse(data);

              const name = person.name;
              // Print character's name
              console.log(name);
            } catch (parseError) {
              console.error('Error parsing name data:', parseError.message);
            }
          }
        });
      }

    } catch (parsingError) {
      console.error('Error parsing response:', parsingError.message);;
    }
  }
});
