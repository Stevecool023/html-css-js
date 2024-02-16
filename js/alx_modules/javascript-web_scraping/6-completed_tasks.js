#!/usr/bin/node

/* Compute the number of tasks completed by user id. */

// The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
// Only print users with completed task
// Must use the module request

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: node 6-completed_tasks.js <API URL>');
}

// Performing a GET request.
request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    try {
      const tasks = JSON.parse(body);

      // Object to store the count of completed tasks for each user.
      const completedTasks = {};

      for (const task of tasks) {
        const complete = task.completed;
        const user_id = task.userId;

        // Check if the task is complete
        if (complete) {
          // Increment the count for the user
          if (completedTasks[user_id]) {
            completedTasks[user_id]++;
          } else {
            completedTasks[user_id] = 1;
          }
        }
      }

      // Display the result
      console.log(completedTasks);
    } catch (parsingError) {
      console.error(parsingError.message);
    }
  }
});
