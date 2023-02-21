const arguments = process.argv;
const {selectTextOutputToTable} = require('./selectTextOutputToTable')

console.table(selectTextOutputToTable({ name: arguments[2], count: arguments[3], volumeOfOne: arguments[4]}));
