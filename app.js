'use strict';

const io = require('socket.io')(3000);
const alterFile = require('./lib/alterFile');

/**
 * establishes a socket connection and listens for 'newFile', 'save', and 'err'
 * @param {socket} socket - the socket connection
 */
io.on('connection', (socket) => {
  console.log('New Connection', socket.id);
  
  
  socket.on('newFile', (file) => {
    console.log({file});
    alterFile(file, socket);
  });

  socket.on('saved', (data) => {
    console.log('in the saved file emitter function', 'data is ', data);
    socket.broadcast.emit('file-saved', data);
  });

  // 'error' is reserved for actual socket errors
  socket.on('err', (err) => { 
    console.error('err', err);
    socket.broadcast.emit('bad-error', err);
  });
});

module.exports = io;
