const questionMark = require("../../coderbyte/challenge/questionMark");

describe("questionMark", () => {
  describe("should check the input", () => {
    test("Arg1 - should check and return true", () => {
      const inputStr = "arrb6???4xxbl5???eee5";
      expect(questionMark(inputStr)).toEqual(true);
    });

    test("Arg2 - should check and return false", () => {
      const inputStr = "aa6?9";
      expect(questionMark(inputStr)).toEqual(false);
    });

    test("Arg3 - should check and return false", () => {
      const inputStr = "9???1???9??1???9";
      expect(questionMark(inputStr)).toEqual(false);
    });

    test("Arg4 - should check and return false", () => {
      const inputStr = "5??aaaaaaaaaaaaaaaaaaa?5?5";
      expect(questionMark(inputStr)).toEqual(false);
    });
  });
});
