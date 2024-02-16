#!/usr/bin/node

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Selecting all <a> elements with class 'link'
    const links = $('.link');

    // Iterating through the selected elements
    links.each((index, element) => {
      console.log($(element).attr('href')); // Extracts the 'href' attribute of each <a> element
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
