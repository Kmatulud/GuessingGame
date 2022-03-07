let guessElem = document.querySelector(".guessBtn");
let inputElem = document.querySelector(".userInput");
let messageElem = document.querySelector(".msg");
messageElem.style.color = "green";
messageElem.innerHTML = "New game started!";

setTimeout(()=>{
    messageElem.innerHTML = "";
}, 3000);

const randomNumFactory = RandomNumFactory();

const getRandomNum = () => {
    randomNumFactory.setUserInput(Number(inputElem.value));
    randomNumFactory.getUserInput()

    randomNumFactory.generateErrorMsg();
    messageElem.innerHTML = randomNumFactory.getErrorMessage();

    setTimeout(()=>{
        messageElem.innerHTML = "";
    }, 3000);
}

guessElem.addEventListener("click", getRandomNum);