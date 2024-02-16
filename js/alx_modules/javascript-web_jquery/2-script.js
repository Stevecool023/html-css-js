#!/usr/bin/node
/*
 * script that updates the text color of the <header> element to red (#FF0000)
 * +when the user clicks on the tag 'DIV#red_header':
 * can't use document.querySelector to select the HTML tag
 * must use the JQuery API
 */
const header = $("header");
const header_id = $("DIV#red_header");

// When user clicks on the 'div' element with the id "#red_header"
header_id.click(function () {
  // change color to red
  header.css("color", "#FF0000");
});

/* $('#red_header').click(function () {
  $('header').css('color', '#FF0000');
}); */

/* $(document).ready(function() {
// When user clicks on the 'div' element with the id "#red_header"
  $("#red_header").click(function() {
    // Change text color of the <header> element to red
    $("header").css("color", "#FF0000");
  });
});

$(document).ready(function() {
  // Listen for keydown event on the 'div' element with the id "#red_header"
  $("#red_header").on("keydown", function(event) {
    // check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
      // Trigger a click event on the 'div' element
      $(this).click();
    }
  });
}); */

/* const header = $("div#red_header");

header.on("click", function() {
  alert("Handler for 'click' called.");
}); */
