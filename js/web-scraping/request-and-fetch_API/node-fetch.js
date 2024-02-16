#!/usr/bin/node

/* Here's how to use 'node-fetch' in Node.js */

const fetch = require('node-fetch');

const url = 'https://api.example.com/data';

fetch(url)
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
