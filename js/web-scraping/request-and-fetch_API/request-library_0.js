#!/usr/bin/node
/* Making a simple GET Request: */

const request = require('request');

const url = 'https://api.example.com/data';

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Response:', body);
  }
});
