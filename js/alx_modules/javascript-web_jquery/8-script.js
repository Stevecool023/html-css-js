#!/usr/bin/node
/*
 * script that fetches and lists the 'title' for all movies by using this URL:
 * ++ https://swapi-api.alx-tools.com/api/films/?format=json
 * All movie titles must be a list in the HTML tag UL#list_movies
 * can't use 'document.querySelector' to select the HTML tag
 * must use the JQuery API
 */
const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';

$.getJSON(url, function(data) {
  const results = data.results;
  
  for (const movie of results) {
    const title = movie.title;

    // update the the list of titles
    const item = $(`<li>${title}</li>`);
    $("UL#list_movies").append(item);
  }
});
