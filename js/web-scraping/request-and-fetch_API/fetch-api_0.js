#!/usr/bin/node

const url = 'https://api.example.com/post-data';

const postData = {
  key1: 'value1',
  key2: 'value2'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log('Data:', data))
.catch(error => console.error('Error:', error));
