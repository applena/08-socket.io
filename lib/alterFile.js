'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);//returns a buffer
const writeFile = util.promisify(fs.writeFile);//accepts buffer

const loadFile = (file) => readFile(file);
const saveFile = (file, buffer) => writeFile(file, buffer);
const convertBuffer = (buffer) => Buffer.from(buffer.toString().toUpperCase());
/**
 * function which reads a file, changes it to upper case and writes it back to the same loaction
 * @param {file path} file - the file path for the file
 * @param {socket} socket - the socket connection
 */

const alterFile = (file, socket) => {
  console.log('read file', file);
  loadFile(file)
    .then(contents => convertBuffer(contents))
    .then(buffer => saveFile(file, buffer))
    .then( () => socket.emit('saved', file)) // socket.io emit...good
    .catch(err => socket.emit('err', err)); // socket.io emit ... fail
};

module.exports = alterFile;