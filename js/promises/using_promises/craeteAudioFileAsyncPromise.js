#!/usr/bin/node

/* function createAudioFileAsync() returning a promise. */

function successCallback(result) {
  console.log(`Audio file available at URL: ${result}`);
}

function failureCallback(error) {
  console.log(`Error generating audio file: ${error}`);
}

// Returning a promise
createFileAsyncPromise(audioSettings).then(successCallback, failureCallback);
