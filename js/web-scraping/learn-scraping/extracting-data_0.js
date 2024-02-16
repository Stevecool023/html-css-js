#!/usr/bin/node

/* Example using DOM methods: */
const url = 'https://example.com';

fetch(url)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Extracting text content of all <p> elements
    const paragraphs = doc.querySelectorAll('P');
    paragraphs.forEach(paragraph => {
      console.log(paragraph.textContent);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
