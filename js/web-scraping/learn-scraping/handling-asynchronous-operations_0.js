#!/usr/bin/node

const url = 'https://example.com';

fetch(url)
  .then(response => response.text())
  .then(html => {
    console.log(html);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
