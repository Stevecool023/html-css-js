#!/usr/bin/node
/*
 * script that adds the class 'red' to the <header> element when the user clicks on the tag 'DIV#red_header'
 * can't use 'document.querySelector' to select the HTML tag
 * must use the JQuery API
 */

/* const header = $("header");
const header_id = $("DIV#red_header");

header_id.on("click", function() {
  header.addClass("red");
}); */

$('DIV#red_header').click(function () {
  $('header').addClass('red');
});
