#!/usr/bin/node
/*
 * script that adds a <li> element to a list when the user clicks on the tag
 * ++ 'DIV#add_item':
 * The new element must be: <li>Item</li>
 * The new element must be added to UL.my_list
 * can't use 'document.querySelector' to select the HTML tag
 * You must use the JQuery API
 */
const addItem = $("DIV#add_item");
const myList = $("UL.my_list");
const item = ("<li>Item</li>");

addItem.on("click", function() {
  myList.append(item);
});
