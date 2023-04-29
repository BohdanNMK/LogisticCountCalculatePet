
const { ARR_CHECK_PUNCTUATION_MARKS, ARR_CHECK_NUMBERS, TEXT_CALCULATION_TABLE } = require('./Veribals');
const Utils = require('./utils');

const myUtils = new Utils(arguments[2], arguments[3], arguments[4])



class SelectTextOutputToTable {
  constructor(name, count, volumeOfOne) {
    this.name = name;
    this.count = count;
    this.volumeOfOne = volumeOfOne;
  }


  completeText() {
    const completeText = myUtils.getGeneralTextAndCalculation(this.name, this.count, this.volumeOfOne);
    const arrWords = completeText.split(' ');
    const arrLetters = completeText.split('');
    const arrParsPunctuationMarks = [];
    const arrParsNumbers = [];
    const arrParsLetters = [];

    arrLetters.forEach((letter) => {
      if (ARR_CHECK_PUNCTUATION_MARKS.includes(letter)) {
        arrParsPunctuationMarks.push(letter);
      } else if (ARR_CHECK_NUMBERS.includes(letter)) {
        arrParsNumbers.push(parseInt(letter));
      } else {
        arrParsLetters.push(letter);
      }
    });

    const arrOutNumbersInTable = [];
    const checkNumbersIndexes = [];
    arrWords.forEach((word, index) => {
      if (!isNaN(word) || (ARR_CHECK_PUNCTUATION_MARKS.includes(word.substring(word.length - 1, word.length)) && !isNaN(word.substring(0, word.length - 1)))) {
        checkNumbersIndexes.push(index);
      }
    });

    arrWords.forEach((word, index) => {
      if (checkNumbersIndexes.includes(index)) {
        arrOutNumbersInTable.push(parseInt(word.substring(0, parseInt(word.length - 1))));
      }
    });

    console.log(myUtils.writeFile())
    console.log(arrParsPunctuationMarks);
    console.log(arrParsNumbers);
    console.log(JSON.stringify(arrParsLetters));
    console.log(checkNumbersIndexes);
    console.log(TEXT_CALCULATION_TABLE);
    return arrOutNumbersInTable
  }

};


module.exports = SelectTextOutputToTable;