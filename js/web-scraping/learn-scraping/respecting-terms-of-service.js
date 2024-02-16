#!/usr/bin/node

/*
 * A custon 'User-Agent' header is added to the request.
 * Some websites may require this to identify requests coming from browsers rather than bots.
 */

const axios = require('axios');

const url = 'https://example.com';

axios.get(url, {
  headers: {
    'User-Agent': 'Your User Agent String',
  },
})
  .then(response => {
    const html = response.data;
    console.log(html);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
