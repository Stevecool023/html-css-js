#!/usr/bin/node
/*
 * script that updates the text color of the <header> element to red (#FF0000):
 * must use document.querySelector to select the HTML tag
 */
const header = document.querySelector("header");
header.style.color = "#FF0000";
