'use strict';

const fs = require('fs');
const util = require('util');
const upperCase = require('./toUpperCase');

const readFile = util.promisify(fs.readFile);//returns a buffer
const writeFile = util.promisify(fs.writeFile);//accepts buffer

/**
 * function which reads a file, changes it to upper case and writes it back to the same loaction
 * @param {file path} file - the file path for the file
 * @param {socket} socket - the socket connection
 */
const alterFile = (file, socket) => {
  console.log('read file', file);
  readFile(file)
    .then((data) => {
      console.log('file read', {data});
      if(!data){
        return socket.emit('err', 'no file');
      }
      console.log({data});
      return upperCase(data);
    })
    .then((data) => {
      console.log('writing file', {data});
      writeFile(file, Buffer.from(data))
        .then(() => {
          socket.emit('saved', file);
        })
        .catch((err) => {
          socket.emit('err', err);
        });
    })
    .catch((err) => {
      console.log('read file error', {err});
      socket.emit('err', err);
    });

};

module.exports = alterFile;