const questionMark = require("../../coderbyte/challenge/questionMark");

describe("questionMark", () => {
  describe("should check the input", () => {
    test("should check and return true", () => {
      const inputStr = "arrb6???4xxbl5???eee5";
      expect(questionMark(inputStr)).toEqual(true);
    });

    test("should check and return false", () => {
      const inputStr = "aa6?9";
      expect(questionMark(inputStr)).toEqual(false);
    });
  });
});
