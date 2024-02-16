#!/usr/bin/node

// Making POST Request with data
const request = require('request');

const url = 'https://api.example.com/post-data';

const postData = {
  key1: 'value1',
  key2: 'value2'
};

request.post({
  url,
  json: postData
}, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Response:', body);
  }
});
