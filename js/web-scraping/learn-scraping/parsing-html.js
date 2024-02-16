#!/usr/bin/node

// Using DOMParser (for browser-based scripts).
const url = 'htpps://example.com';

fetch(url)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    console.log(doc.querySelector('title').textContent); // Extracts the text content of the <title> element
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
