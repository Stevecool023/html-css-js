#!/usr/bin/node

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Example: Extracting titles of all articles
    $('article').each((index, element) => {
      const title = $(element).find('h2').text();
      console.log(title);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
