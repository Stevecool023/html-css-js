#!/usr/bin/node
/*
 * script that adds, removes and clears 'LI' elements from a list when the user clicks:
 * The new element must be '<li>Item</li>'
 * The new element must be added to 'UL.my_list'
 * When the user clicks on 'DIV#add_item': a new element is added to the list
 * When the user clicks on 'DIV#remove_item': the last element is removed from the list
 * When the user clicks on 'DIV#clear_list': all elements of the list are removed
 * can't use 'document.querySelector' to select the HTML tag
 * must use the JQuery API
 * script must work when imported from the 'HEAD' tag
 */

// When the whole html page has loaded
$(document).ready(function() {
  $("DIV#add_item").click(function() {
    // Add a new item
    $("UL.my_list").append("<li>Item</li>");
  });

  /* removing an item from the list
  $("DIV#remove_item").on("click", function() {

    const items = $("UL.my_list li");

    // Iterate over the items in the list
    items.each(function() {
      // remove item
      $(this).remove();
    });
  }); */

  /* removing the item from the list */
  $("DIV#remove_item").on("click", function() {
    const items = $("UL.my_list li");

    if (items.length > 0) {
      items.last().remove();
    }
  });

  /* Clearing the whole list */
  $('DIV#clear_list').click(function() {
    // clear the whole list
    $('UL.my_list').text("");
  });
});
