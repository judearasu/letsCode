/* eslint-disable no-undef */
module.exports = QuestionsMarks;

function QuestionsMarks(str) {
  let numbers = [];
  let inputStrArr = str;
  let result = false;
  for (let i = 0; i < inputStrArr.length; i++) {
    if (parseInt(inputStrArr[i], 10)) {
      numbers.push(inputStrArr[i]);
    }
  }
  for (let j = 0; j < numbers.length - 1; j++) {
    if (parseInt(numbers[j], 10) + parseInt(numbers[j + 1], 10) === 10) {
      result = true;
      let subStrTxt = inputStrArr.substring(
        inputStrArr.lastIndexOf(numbers[j]) + 1,
        inputStrArr.lastIndexOf(numbers[j + 1])
      );
      // eslint-disable-next-line no-useless-escape
      subStrTxt =  subStrTxt.replace(/[^\?]/g,'');
      if (subStrTxt !== "???") {
         return result;
      }
    }
  }
  return result;
}