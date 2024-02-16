#!/usr/bin/node
/*
 * script that updates the text color of the <header> element to red (#FF0000):
 * don't use 'document.querySelector' to select the HTML tag
 * must use the JQuery API
 */
const header = $("header");
header.css("color", "#FF0000");
