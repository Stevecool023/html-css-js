#!/usr/bin/node

// Example using DOM methods
const url = 'https://example.com';

fetch(url)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Selecting all <a> elements with class 'link'
    const links = doc.querySelectorAll('.link');

    // Iterating through the selected elements
    links.forEach(link => {
      console.log(link.getAttribute('href')); // Extracts the 'href' attribute of each <a> element
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
