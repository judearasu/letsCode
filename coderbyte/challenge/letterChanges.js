/**
 * Have the function LetterChanges(str) take the str parameter being passed
 * and modify it using the following algorithm. Replace every letter in the
 * string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
 *
 * Input: "hello*3"
 * Output: Ifmmp*3
 */

module.exports = letterChanges;

function letterChanges(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let strLength = str.length;
  let newStr = "";
  let lastChar;
  for (let i = 0; i < strLength; i++) {
    lastChar = alphabet.indexOf(str[i]);
    switch(lastChar) {
      case 25:
        newStr = newStr + "a";
        break;
      case -1:
        newStr = newStr + str[i];
        break;
      default:
        newStr = newStr + alphabet[lastChar+1];
    }
  }
  return newStr.replace(/[aeiou]/gi, (letter)=>{
     return letter.toUpperCase();
  })
}
