const firstReverse = require("../../coderbyte/challenge/firstReverse");
describe("firstReverse", () => {
  describe("should check the input params", () => {
    test("should be a string", () => {
      // eslint-disable-next-line no-undef
      expect(() => firstReverse(121212).toThrow(CustomError));
    });
  });
});
