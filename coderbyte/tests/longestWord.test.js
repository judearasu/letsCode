const longestWord = require("../../coderbyte/challenge/longestWord");

describe("longestWord", () => {
  describe("should check the input string", () => {
    test("should check the input argument", () => {
      expect(longestWord.length).toEqual(1);
    });

    test("should check the outpput", () => {
      let inputStr = "fun&!! time";
      expect(typeof longestWord(inputStr)).toEqual("string");
    });
  });

  describe("should check the with the input arguments", () => {
    test("check for input1", () => {
        let inputStr = "fun&!! time";
        expect(longestWord(inputStr)).toEqual("time");
      });

      test("check for input2", () => {
        let inputStr = "I love dogs";
        expect(longestWord(inputStr)).toEqual("love");
      });

      test("check for input3", () => {
        let inputStr = "I love mathematics$! than  100Zoology";
        expect(longestWord(inputStr)).toEqual("mathematics");
      });
  });
});


