#!/usr/bin/node

const url = 'https://example.com';
fetch(url)
  .then(response => response.text())
  .then(html => {
    console.log(html);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
