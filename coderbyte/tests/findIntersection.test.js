const findIntersection = require("../../coderbyte/challenge/findIntersection");

describe("findIntersection", () => {
  describe("should check array with strings", () => {
    test("should check the argument", () => {
      const inputStrArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
      expect(findIntersection(inputStrArr)).toEqual('1,4,13');
    });
  
  });
});
