const {getGeneralTextAndCalculation} = require('./utils');
const { ARR_CHECK_PUNCTUATION_MARKS, ARR_CHECK_NUMBERS, TEXT_CALCULATION_TABLE } = require('./Veribals');

class SelectTextOutputToTable {
  constructor(name, count, volumeOfOne, number, timeout, cb) {
    this.name = name;
    this.count = count;
    this.volumeOfOne = volumeOfOne;
    this.number = number;
    this.timeout = timeout;
    this.cb = cb;
  }

  completeText() {
    const completeText = getGeneralTextAndCalculation(this.name, this.count, this.volumeOfOne);
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

    setTimeout(() => {
      this.cb({
        number: this.number,
        timeout: this.timeout,
        arrOutNumbersInTable,
        arrParsPunctuationMarks,
        arrParsNumbers,
        arrWords,
        arrParsLetters,
        checkNumbersIndexes,
        TEXT_CALCULATION_TABLE,
      });
    }, this.timeout);
  }
};


// перевести на класс формат
  

  module.exports = {SelectTextOutputToTable};