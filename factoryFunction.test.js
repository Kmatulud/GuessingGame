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
        assert.equal(55, randomNumFactory.generateRandomNum(55))
    })
    it("Should show an error message depending on the kind of input", () => {
        randomNumFactory.setUserInput(110);
        randomNumFactory.getUserInput();

        randomNumFactory.generateErrorMsg()
        assert.equal("Invalid ..should be numbers between 1 and 100", randomNumFactory.getErrorMessage())

        randomNumFactory.setUserInput(55);
        randomNumFactory.getUserInput();

        randomNumFactory.generateErrorMsg()
        assert.equal(`Correct, the secret number is ${randomNumFactory.generateRandomNum()}`, randomNumFactory.getErrorMessage())

        randomNumFactory.setUserInput(-1);
        randomNumFactory.getUserInput();

        randomNumFactory.generateErrorMsg()
        assert.equal("Invalid ..should be numbers between 1 and 100", randomNumFactory.getErrorMessage())

        randomNumFactory.setUserInput(14);
        randomNumFactory.getUserInput();

        randomNumFactory.generateErrorMsg()
        assert.equal("Your guess is too low", randomNumFactory.getErrorMessage())

        randomNumFactory.setUserInput(60);
        randomNumFactory.getUserInput();

        randomNumFactory.generateErrorMsg()
        assert.equal("Your guess is too high", randomNumFactory.getErrorMessage())

    })
})