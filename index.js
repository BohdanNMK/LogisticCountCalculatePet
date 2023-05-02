const arguments = process.argv;
const SelectTextOutputToTable = require('./SelectTextOutputToTable');
const textOutput = new SelectTextOutputToTable(arguments[2], arguments[3], arguments[4]);


console.table(textOutput.completeText())






