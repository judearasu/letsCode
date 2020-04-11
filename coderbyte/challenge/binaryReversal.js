/** Problem
Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, take its 
binary representation (padded to the nearest N * 8 bits), reverse that string of bits, and then finally return the new 
reversed string in decimal form. For example: if str is "47" then the binary version of this integer is 101111 but we 
pad it to be 00101111. Your program should reverse this binary string which then becomes: 11110100 and then finally return 
the decimal version of this string, which is 244
**/

/** Steps
  1. Convert positive integert to Binary
  2. Pad 000 to nearest N*8 bits
  3. Reverse the string
  4. Convert back the string to decimal
 */

 
module.exports = binaryReversal;
function binaryReversal(str) {
  let inputBinaryStr = parseInt(str, 10).toString(2);
  let inputBinaryLength = inputBinaryStr.length;
  // leading zeroes to make the number an integral number of bytes
  let byteLen = 8 - (inputBinaryLength % 8);
  let x = 0;
  inputBinaryLength % 8 !== 0  ? inputBinaryStr= new Array(byteLen+1).join(x) + inputBinaryStr : inputBinaryStr;
  inputBinaryStr = inputBinaryStr
    .split("")
    .reverse()
    .join("");

  inputBinaryStr = parseInt(inputBinaryStr, 2);
  return inputBinaryStr;
}
