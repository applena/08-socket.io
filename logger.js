'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

/**
 * listens for the 'file-saved' to be emitted and console loggs that the file was saved
 * @param {string} file - file 
 */

socket.on('file-saved', (file)=>{
  console.log(`${file} saved`);
});

/**
 * listens for the 'bad-error' to be emitted and console.errors the error
 * @param {error} error - the error
 */

socket.on('bad-error', (error)=>{
  console.error('there was a problem, ', error);
});
