#!/usr/bin/node

/*
 * To easily handle errors when streaming requests, listen to the error
 * event before piping:
 */

const request = require('request');
const fs = require('fs');

request
  .get('http://mysite.com/doodle.png')
  .on('error', function(err) {
    console.erro(err)
  })
  .pipe(fs.createWriteStream('doodle.png'))
