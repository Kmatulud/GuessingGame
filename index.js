let guessElem = document.querySelector(".guessBtn");
let input = document.querySelector(".userInput");
let message = document.querySelector(".msg");

function getRandomNum(){

    let randomNumber = Math.ceil(Math.random() * 5);
    console.log(randomNumber);
    let inputElem  = input.value;
    console.log(inputElem);

    message.innerHTML = "New game started!";

    if(inputElem > randomNumber){
        message.innerHTML = "Your guess is too high";
    }
    else if(inputElem < randomNumber){
        message.innerHTML = "Your guess is too low";
    }
    else{
        message.innerHTML = "Correct, the secret number is ${randomNumber}";
    }
    setTimeout(()=>{
        message.innerHTML = "";
    }, 3000);
}


guessElem.addEventListener("click", getRandomNum);