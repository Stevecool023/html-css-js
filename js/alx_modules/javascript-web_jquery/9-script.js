#!/usr/bin/node
/*
 * script that fetches from https://hellosalut.stefanbohacek.dev/?lang=fr
 * ++ and displays the value of 'hello' from that fetch in the HTML tag 'DIV#hello'
 * The translation of "hello" must be displayed in the HTML tag 'DIV#hello'
 * can't use 'document.querySelector' to select the HTML tag
 * must use the JQuery API
 * script must work when it is imported from the '<head>' tag
 */
const url = 'https://hellosalut.stefanbohacek.dev/?lang=fr'

// When the page has already loaded, even if the script is placed in the head tag
$(document).ready(function() {
  // fetch data from the url
  $.getJSON(url, function(data) {

    const greet = data.hello;

    // output hello translation in the div tag with id hello
    $('DIV#hello').text(greet);
  });
});
