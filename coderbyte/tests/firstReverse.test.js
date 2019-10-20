const firstReverse = require("../../coderbyte/challenge/firstReverse");
describe("firstReverse", () => {
  describe("should check string without spaces", () => {
    test("should reverse the given string", () => {
      expect(firstReverse('hello')).toEqual('olleh');
    });

    test("should reverse the given string with spaces", () => {
      expect(firstReverse('deepthi thondapu')).toEqual('upadnoht ihtpeed');
    });

    test("should fail if the space was removed", () => {
      expect(firstReverse('hello world')).not.toBe('dlrowolleh');
    });
  });
});
