const RandomNumFactory = () => {
    let userInput;
    let random = Math.ceil((Math.random() * 100));
    let message = "";


    const setUserInput = input => {
        userInput = input;
    }
        
    const getUserInput = () => {
        return userInput;
    }

    const hardCodeRandomNum = randomNum => {
        randomNum = 55;
        return randomNum;
    }
    const generateRandomNum = randomN => {
        randomN = random;
        return randomN;
    }

    const generateErrorMsg = () => {
        if(getUserInput() < 1 || getUserInput() > 100 || getUserInput() === ""){
            message = "Invalid ..should be numbers between 1 and 100";
        }
        else if(getUserInput() < generateRandomNum()){
            message = "Your guess is too low";
        }
        else if(getUserInput() > generateRandomNum()){
            message = "Your guess is too high";
        }
        else{
            message = `Correct, the secret number is ${generateRandomNum()}`;
        }
    }

    const getErrorMessage = () => {
        return message;
    }

    const testHardcodeRandomNum = () => {
        if(getUserInput() < 1 || getUserInput() > 100 || getUserInput() === ""){
            message = "Invalid ..should be numbers between 1 and 100";
        }
        else if(getUserInput() < hardCodeRandomNum()){
            message = "Your guess is too low";
        }
        else if(getUserInput() > hardCodeRandomNum()){
            message = "Your guess is too high";
        }
        
        else{
            message = `Correct, the secret number is ${hardCodeRandomNum()}`;
        }
    }
    
    const getTestHardcodeRandomNum = () => {
        return message;
    }
    
    return {
        setUserInput,
        getUserInput,
        generateRandomNum,
        generateErrorMsg,
        hardCodeRandomNum,
        getErrorMessage,
        testHardcodeRandomNum,
        getTestHardcodeRandomNum
    }
}