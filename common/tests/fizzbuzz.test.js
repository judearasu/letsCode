const fizzBuzz = require("../challenge/fizzbuzz");

global.console = {
    log: jest.fn(), info: jest.fn(), error: jest.fn()
}

describe("FizzBuzz", () => {
    describe("should check the input 15", () => {
        // test("should check 15 and print FizzBuzz", () => {
        //     const inputStr = 15;
        //     fizzBuzz(inputStr);
        //     expect(global.console.log).toHaveBeenCalledWith('FizzBuzz');
        // });
        test("should check 5 and print FizzBuzz", () => {
            const inputStr = 5;
            fizzBuzz(inputStr);
            expect(global.console.log).toHaveBeenCalledWith('Buzz');
        });
    });
});
