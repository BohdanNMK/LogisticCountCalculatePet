const fs = require('fs');

const arguments = process.argv;
const SelectTextOutputToTable = require('./selectTextOutputToTable')
const textOutput = new SelectTextOutputToTable(arguments[2],arguments[3],arguments[4]);





textOutput.completeText()
console.log(textOutput.completeText())


// console.log(2);
// console.log(3);
// selectTextOutputToTable({ name: arguments[2], count: arguments[3], volumeOfOne: arguments[4], timeout: getRandomArbitrary(1000, 5000), number: 3, cb: showOutputData});
// console.log(4);
// selectTextOutputToTable({ name: arguments[2], count: arguments[3], volumeOfOne: arguments[4], timeout: getRandomArbitrary(1000, 5000), number: 4, cb: showOutputData});
// console.log(5);

