const letterChanges = require("../../coderbyte/challenge/letterChanges");
describe("firstReverse", () => {
  describe("should check the string valid or not", () => {
    test("should check the one character", () => {
      expect(letterChanges("a")).toEqual("b");
    });
    test("should check the two character", () => {
      expect(letterChanges("ab")).toEqual("bc");
    });
    test("should check the random character", () => {
      expect(letterChanges("hello*3")).toEqual("Ifmmp*3");
    });
    test("should check the last character", () => {
      expect(letterChanges("z")).toEqual("A");
    });
  });
});
