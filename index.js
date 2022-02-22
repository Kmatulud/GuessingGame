let guessElem = document.querySelector(".guessBtn");
let input = document.querySelector(".userInput");
let message = document.querySelector(".msg");

let randomNumber = Math.ceil((Math.random() * 100));

message.innerHTML = "New game started!";

setTimeout(()=>{
    message.innerHTML = "";
    message.style.color = "green";
}, 3000);

function getRandomNum(){

    let inputElem  = input.value;

    if(inputElem > randomNumber){
        message.innerHTML = "Your guess is too high";
    }
    else if(inputElem < randomNumber){
        message.innerHTML = "Your guess is too low";
    }
    else{
        message.innerHTML = `Correct, the secret number is ${randomNumber}`;
    }
    setTimeout(()=>{
        message.innerHTML = "";
        message.style.color = "green";
    }, 3000);
}


guessElem.addEventListener("click", getRandomNum);