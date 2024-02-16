#!/usr/bin/node

/*
 * Print Star Wars Movie character's name
 * Pass the movie ID as the first argument
 * Must use the Star Wars API
 * Must use the request module
 */

const request = require('request');

const movie_id = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movie_id}`;

// Make a simple GET Request
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      const characterData = JSON.parse(body);

      // Iterate over each character
     characterData.characters.forEach(characterUrl => {
       request.get(characterUrl, (characterError, characterResponse, characterBody) => {
         if (characterError) {
           console.error('Character Error:', characterError.message);
         } else {
           try {
             const characterName = JSON.parse(characterBody);

             // Output the character's name
             console.log(characterName.name);
           } catch (parseCharater) {
             console.error('Error parsing character:', parseCharacter.message); // Handle error in parsing JSON for the character names
           }
         }
       });
     });
    } catch (parseError) {
      console.error('Error parsing response:', parseError.message);
    }
  }
});
