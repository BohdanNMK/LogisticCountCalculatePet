
const { ARR_CHECK_PUNCTUATION_MARKS, ARR_CHECK_NUMBERS, TEXT_CALCULATION_TABLE } = require('./veribals');
const Utils = require('./Utils');

class SelectTextOutputToTable {
  constructor(name, count, volumeOfOne) {
    this.name = name;
    this.count = count;
    this.volumeOfOne = volumeOfOne;
    this.myUtils = new Utils(name,count,volumeOfOne)
    }


  completeText() {
    const completeText = this.myUtils.getGeneralTextAndCalculation();
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

    this.myUtils.writeFile(arrOutNumbersInTable)
    console.log(arrParsPunctuationMarks);
    console.log(arrParsNumbers);
    console.log(JSON.stringify(arrParsLetters));
    console.log(checkNumbersIndexes);
    console.log(TEXT_CALCULATION_TABLE);
    return arrOutNumbersInTable
  }

};


module.exports = SelectTextOutputToTable;