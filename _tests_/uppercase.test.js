'use strict';

const uppercase = require('../lib/toUpperCase');

describe('turns a file into uppercase', () => {
  it('turn a file into uppercase', () => {
    let result = uppercase(new Buffer.from('foobar'));
    expect(result).toEqual('FOOBAR');
  });
});