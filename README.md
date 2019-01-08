![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Socket.IO lab

### Author: Lena Eivy

### Links and Resources
* [repo](https://github.com/applena/08-socket.io)
* [travis](https://travis-ci.com/applena/08-socket.io.svg?branch=master)

### Modules
#### `alterFile.js`
##### Exported Values and Methods

###### `alterFile(file-path) -> string`
exports a function that takes in a file path, turns that file to upper case and rewrites that file to the same location

#### `toUpperCase.js`
##### Exported Values and Methods

###### `toUpperCase(buffer) -> string`
returns a string of uppercase values

### Setup
#### `.env` requirements
* `PORT` - Port Number 3000
* `npm i`

#### Running the app
* connect to localhost:3000 via socket.io
* run app.js in your CLI - `node app.js`
* next run logger.js in a different terminal - `node logger.js`
* finally run speaker.js in a different terminal - `node speaker.js filepath`

#### Tests
* How do you run tests?
`npm run test`
* What assertions were made?
Assrting that a file is read, rewritten in uppercase and saved in the same location

