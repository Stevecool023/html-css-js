#!/usr/bin/node

const axios = require('axios');

const url = 'https://example.com';

axios.get(url)
  .then(response => {
      const html = response.data;
      console.log(html);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
