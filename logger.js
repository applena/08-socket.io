'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const alterFile = require('./lib/alterFile');

/**
 * listens for the 'read' to be emitted and runs the alterFile function
 * @param {string} file - file path
 */
socket.on('read', file => {
  console.log('in logger listening to read', file);
  alterFile(file, socket);
});

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


module.exports = alterFile;