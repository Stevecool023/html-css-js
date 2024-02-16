#!/usr/bin/bash

/*
 * Script that computes the number of tasks completed by user id.
 * The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
 * Only users with completed tasks are printed.
 * Must use the module 'request'
 */

const request = require('request');

const apiUrl = process.argv[2];

// Perfom a GET request
request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    try {
      const tasks = JSON.parse(body);

      // Filtering completed tasks
      const completedTask = tasks.filter(task => task.completed);

      // Outlining completed tasks by id
      const completedTaskByUserId = completedTask.reduce((acc, task) => {

        // Check if UserId is in the list
        if (acc[task.userId]) {
          acc[task.userId]++;
        } else {
          acc[task.userId] = 1;
        }
        
        return acc;
      }, {});
      
      // Output the results
      console.log(completedTaskByUserId);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});
