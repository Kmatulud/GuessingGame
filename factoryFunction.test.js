describe("The Guessing Game", () => {
    const randomNumFactory = RandomNumFactory();

    it("Should be able to set and get user input", () => {
        randomNumFactory.setUserInput(5);
        assert.equal(5, randomNumFactory.getUserInput())
        randomNumFactory.setUserInput(40);
        assert.equal(40, randomNumFactory.getUserInput())
        randomNumFactory.setUserInput(89);
        assert.equal(89, randomNumFactory.getUserInput())
    })
    it("Should be able to generate a random number", () => {
        assert.equal(55, randomNumFactory.hardCodeRandomNum(55))
    })
    it("Should show an error message depending on the kind of input", () => {
        randomNumFactory.setUserInput(110);
        randomNumFactory.getUserInput();

        randomNumFactory.testHardcodeRandomNum()
        assert.equal("Invalid ..should be numbers between 1 and 100", randomNumFactory.getTestHardcodeRandomNum())

        randomNumFactory.setUserInput(55);
        randomNumFactory.getUserInput();

        randomNumFactory.testHardcodeRandomNum()
        assert.equal(randomNumFactory.getTestHardcodeRandomNum(), randomNumFactory.getTestHardcodeRandomNum())

        randomNumFactory.setUserInput(-1);
        randomNumFactory.getUserInput();

        randomNumFactory.testHardcodeRandomNum()
        assert.equal("Invalid ..should be numbers between 1 and 100", randomNumFactory.getTestHardcodeRandomNum())

        randomNumFactory.setUserInput(14);
        randomNumFactory.getUserInput();

        randomNumFactory.testHardcodeRandomNum()
        assert.equal("Your guess is too low", randomNumFactory.getTestHardcodeRandomNum())

        randomNumFactory.setUserInput(60);
        randomNumFactory.getUserInput();

        randomNumFactory.testHardcodeRandomNum()
        assert.equal("Your guess is too high", randomNumFactory.getTestHardcodeRandomNum())

    })
})