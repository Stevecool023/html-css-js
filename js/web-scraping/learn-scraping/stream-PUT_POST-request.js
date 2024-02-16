#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const path = require('path');

fs.createReadStream('json-object.json').pipe(request.put('http://mysite.com/obj.json'))
