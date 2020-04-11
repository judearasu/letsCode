const binaryReversal = require("../../coderbyte/challenge/binaryReversal");

describe("binaryReversal", () => {
  describe("should check the input string", () => {
    test("should check the input argument", () => {
      expect(binaryReversal.length).toEqual(1);
    });

    test("should check the outpput", () => {
      let inputStr = "278";
      expect(typeof binaryReversal(inputStr)).toEqual("number");
    });
  });

  describe("should convert the input to binary and reverse the binary", () => {
    test("check for input 213", () => {
      expect(binaryReversal("213")).toEqual(171);
    });

    test("check for input 47", () => {
      expect(binaryReversal("47")).toEqual(244);
    });

    test("check for input 4567", () => {
      expect(binaryReversal("4567")).toEqual(60296);
    });
  });
});
