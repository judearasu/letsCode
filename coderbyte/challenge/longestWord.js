/** Problem
 Have the function LongestWord(sen) take the sen parameter being passed and return the largest 
 word in the string. If there are two or more words that are the same length, return the first word 
 from the string with that length. Ignore punctuation and assume sen will not be empty.
 */

module.exports = longestWord;
function longestWord(str) {
  let updatedString = str.trim();
  // let hashMap = [];
  // Remove non-alphanumeric characters
  updatedString = updatedString.replace(/[^a-zA-Z]/gi, " ");
  // Remove empty elements from the array
    updatedString = updatedString.split(" ").filter(strObj => strObj);
    updatedString = updatedString.sort((a, b) => b.length - a.length);
    updatedString = updatedString[0];

  //   // Alternate method
  //   updatedString = updatedString.split(" ").filter((strObj, index) => {
  //     if (strObj) {
  //       hashMap.push({ index: index, value: strObj });
  //     }
  //   });
  //   hashMap.sort((a, b) => b.value.length - a.value.length);
  //   updatedString = hashMap[0].value;
  return updatedString;
}
