const simpleAdd = require("../../coderbyte/challenge/simpleAdd");
describe("simpleAdd", () => {
  describe("should check for number less than 1", () => {
    test("should check the 0", () => {
      expect(simpleAdd(0)).toEqual(0);
    });
    test("should check for 1000 and return the same", () => {
      expect(simpleAdd(1000)).toEqual(1000);
    });
  });
  describe("should check for number less than 150", () => {
    test("should check the 120", () => {
      expect(simpleAdd(120)).toEqual(7260);
    });
  });
});
