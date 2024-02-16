#!/usr/bin/node
/*
 * script that updates the text of the '<header>' element to 'New Header!!!'
 * ++ when the user clicks on 'DIV#update_header'
 * can't use 'document.querySelector' to select the HTML tag
 * must use the JQuery API
 */

const header = $("header");
const update_id = $("DIV#update_header");

update_id.click(function() {
  // Change header content to "New Header!!!"
  header.text("New Header!!!");
});
