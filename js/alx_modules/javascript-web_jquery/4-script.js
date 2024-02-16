#!/usr/bin/node
/*
 * script that toogles the class of the '<header>' element
 * ++when the user clicks on the tag 'DIV#toogle_header':
 * The '<header>' element must have one class:'red' or 'green',
 * ++never both in the same time and never empty.
 * If the current class i 'red', when the user click on 'DIV#toggle_header',
 * ++ the class must be updated to 'green'; and the reverse.
 * can't use document.querySelector to select the HTML tag
 * must use the JQuery API.
 */
const header = $('header');
const header_id = $('DIV#toggle_header');

// On clicking the 'div' with 'id=toggle_header'
header_id.on("click", function() {
  header.toggleClass('red green');
});
