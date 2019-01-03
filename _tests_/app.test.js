'use strict';

jest.mock('fs');
const alterFile = require('../lib/alterFile');
// const io = require('../app.js');

const consoleSpy = jest.spyOn(console, 'log');
const socket = {emit: () => {console.log('socket emitter ', this.arguments);}};
const socketSpy = jest.spyOn(socket, 'emit');


describe('uses socket.io to create and run a server that listens for a file, turns it to uppercase and writes it back in the same location', ()=> {
  
  it('reads a file', () => {
    alterFile('test.txt', socket);
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('read file', 'test.txt');

  });

  it('saves a file', () => {
    alterFile('test.txt', socket);
    expect(socketSpy).toHaveBeenCalled();
    expect(socketSpy).toHaveBeenCalledWith('saved', 'test.txt');
  });
  
  it('emits an error if there is an error', () => {
    alterFile('error.txt', socket);
    expect(socketSpy).toHaveBeenCalled();
  });
});