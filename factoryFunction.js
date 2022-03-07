const RandomNumFactory = () => {
    let userInput ;
    let message = "";

    const setUserInput = input => {
        userInput = input;
    }
        
    const getUserInput = () => {
        return userInput;
    }

    const generateRandomNum = randomNum => {
        randomNum = 55;
        return randomNum;
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

    return {
        setUserInput,
        getUserInput,
        generateRandomNum,
        generateErrorMsg,
        getErrorMessage
    }
}