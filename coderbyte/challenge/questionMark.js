/* eslint-disable no-undef */
module.exports = QuestionsMarks;

function QuestionsMarks(str) {
  let numbers = [];
  let inputStrArr = str;
  let numbersWithIndex = [];

  let result = false;
  for (let i = 0; i < inputStrArr.length; i++) {
    if (parseInt(inputStrArr[i], 10)) {
      numbers.push(inputStrArr[i]);
      numbersWithIndex.push({
        number: parseInt(inputStrArr[i], 10),
        index: i,
      });
    }
  }
  for (let j = 0; j < numbersWithIndex.length - 1; j++) {
    if (
      parseInt(numbersWithIndex[j].number, 10) +
        parseInt(numbersWithIndex[j + 1].number, 10) ===
      10
    ) {
      result = true;
      let subStr = inputStrArr.substring(
        numbersWithIndex[j].index + 1,
        numbersWithIndex[j + 1].index
      );
      subStr = subStr.replace(/[a-zA-Z]/g, '');
      if (!subStr.includes('???')) {
        result = false;
        return false;
      }
    }
  }
  return result;
}
