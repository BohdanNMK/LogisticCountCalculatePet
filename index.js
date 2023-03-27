const fs = require('fs');
const arguments = process.argv;

const {SelectTextOutputToTable} = require('./selectTextOutputToTable')
const textOutput = new SelectTextOutputToTable();
const showOutputData = ({
    
    arrParsPunctuationMarks,
    arrParsNumbers,
    arrWords,
    arrParsLetters,
    checkNumbersIndexes,
    TEXT_CALCULATION_TABLE,
    arrOutNumbersInTable,
    number,
    timeout,
  }) => {
    
    console.log(number);
    console.log(timeout);
    console.log(arrParsPunctuationMarks);
    console.log(arrParsNumbers);
    console.log(arrWords);
    console.log(JSON.stringify(arrParsLetters));
    console.log(checkNumbersIndexes);
    console.log(TEXT_CALCULATION_TABLE);
    console.table(arrOutNumbersInTable);
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};
const writeDataToFile = ({ 
    TEXT_CALCULATION_TABLE,
    arrOutNumbersInTable,
  }) => {
    const data = JSON.stringify({
       TEXT_CALCULATION_TABLE, 
        arrOutNumbersInTable,
    })
    fs.writeFileSync('test.txt', data,  (err) => { 
      if (err) {
        console.error(err);
      } else {
        console.log('Data written to file');
      }
    });
  }






   
   console.log(textOutput)
console.log(2);
selectTextOutputToTable({ name: arguments[2], count: arguments[3], volumeOfOne: arguments[4], timeout: getRandomArbitrary(1000, 5000), number: 2, cb: showOutputData});
console.log(3);
selectTextOutputToTable({ name: arguments[2], count: arguments[3], volumeOfOne: arguments[4], timeout: getRandomArbitrary(1000, 5000), number: 3, cb: showOutputData});
console.log(4);
selectTextOutputToTable({ name: arguments[2], count: arguments[3], volumeOfOne: arguments[4], timeout: getRandomArbitrary(1000, 5000), number: 4, cb: showOutputData});
console.log(5);

