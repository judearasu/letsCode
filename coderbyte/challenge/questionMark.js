/*
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and 
question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, 
then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers 
that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks 
between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
*/
/* eslint-disable no-undef */
module.exports = QuestionsMarks;

function QuestionsMarks(str) {
  let inputStrArr = str;
  let numbersWithIndex = [];

  let result = false;
  for (let i = 0; i < inputStrArr.length; i++) {
    if (parseInt(inputStrArr[i], 10)) {
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
      subStr = subStr.replace(/[a-zA-Z]/g, "");
      if (!subStr.includes("???")) {
        result = false;
        return false;
      }
    }
  }
  return result;
}
