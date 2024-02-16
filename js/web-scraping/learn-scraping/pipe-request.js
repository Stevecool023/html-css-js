#!/usr/bin/node

const request = require('request');

request.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'))
