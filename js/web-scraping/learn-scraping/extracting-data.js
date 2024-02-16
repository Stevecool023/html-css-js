#!/usr/bin/node

/* Example using Cheerio: */
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Extracting text content of all <p> elements
    const paragraphs = $('p');
    paragraphs.each((index, element) => {
      console.log($(element).text());
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
