'use strict';

/**
 * turns the contents of a file to upper case
 * @param {buffer} data - file
 */

function upperCase(data){
  console.log('running upperCase');
  return data.toString().toUpperCase();
}

module.exports = upperCase;