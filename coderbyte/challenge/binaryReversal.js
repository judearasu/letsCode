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
