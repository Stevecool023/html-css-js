#!/usr/bin/node

// Using cheerio
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com'

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Now, $ is a function that allows to query and manupulate the HTML content
    console.log($('title').text()); // Extracts the text content of the <title> element.
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
