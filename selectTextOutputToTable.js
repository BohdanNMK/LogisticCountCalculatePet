const {getGeneralTextAndCalculation} = require('./utils');
const { ARR_CHECK_PUNCTUATION_MARKS, ARR_CHECK_NUMBERS, TEXT_CALCULATION_TABLE } = require('./Veribals');
const selectTextOutputToTable = function({name, count, volumeOfOne}) {
    const completeText = getGeneralTextAndCalculation({name, count, volumeOfOne});
    const arrWords = completeText.split(' ');
    const arrLetters = completeText.split('');
    const arrParsPunctuationMarks = [];
    const arrParsNumbers = [];
    const arrParsLetters = [];
  
  
    for (let i = 0; i < arrLetters.length; i++) {
      if (ARR_CHECK_PUNCTUATION_MARKS.includes(arrLetters[i])) {
        arrParsPunctuationMarks.push(arrLetters[i]);
      }
      else if (ARR_CHECK_NUMBERS.includes(arrLetters[i])) {
        arrParsNumbers.push(arrLetters[i]);
      }
      else {
        arrParsLetters.push(arrLetters[i]);
      }
  
    }
  
    const arrOutNumbersInTable = [];
    const checkNumbersIndexes = [];
  
  
    for (let i = 0; i < arrWords.length; i++) {
  
      if (!isNaN(arrWords[i]) || (
        ARR_CHECK_PUNCTUATION_MARKS.includes(arrWords[i].substring(arrWords[i].length - 1, arrWords[i].length))
        && !isNaN(arrWords[i].substring(0, arrWords[i].length - 1)))) {
        checkNumbersIndexes.push(i)
  
      }
  
    }
  
    for (let i = 0; i < arrWords.length; i++) {
      if (checkNumbersIndexes.includes(i)) arrOutNumbersInTable.push(parseInt(arrWords[i].substring(0, parseInt(arrWords[i].length - 1))));
    }
  
    console.log(arrParsPunctuationMarks);
    console.log(arrParsNumbers);
    console.log(JSON.stringify(arrParsLetters));
    console.log(checkNumbersIndexes);
    console.log(TEXT_CALCULATION_TABLE);
    return arrOutNumbersInTable;
  }
  module.exports = {selectTextOutputToTable};