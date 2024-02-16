#!/usr/bin/node
/*
 * script that fetches the character 'name' from this URL:
 * ++ 'https://swapi-api.alx-tools.com/api/people/5/?format-json'
 * The name must be displayed in the HTML tag 'DIV#character'
 * can't use 'document.querySelector' to select the HTML tag
 * must use the JQuery API
 */
const url = 'https://swapi-api.alx-tools.com/api/people/5/?format=json'
// const displayName = 'DIV#character'

$.getJSON(url, function(data) {
  // update the textContent to character name
  $('DIV#character').text(data.name);
});
