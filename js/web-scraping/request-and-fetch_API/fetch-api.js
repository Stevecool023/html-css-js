#!/usr/bin/node

/* Making a simple GET Request: */
const url = 'https://api.example.com/data';

fetch(url)
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
