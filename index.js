let guessElem = document.querySelector(".guessBtn");
let input = document.querySelector(".userInput");
let message = document.querySelector(".msg");
message.style.color = "green";


let randomNumber = Math.ceil((Math.random() * 100));

message.innerHTML = "New game started!";

setTimeout(()=>{
    message.innerHTML = "";
}, 3000);


function getRandomNum(){

    let inputElem  = Number(input.value);

    if(inputElem < 1 || inputElem > 100 || inputElem === ""){
        message.innerHTML = "Invalid ..should be numbers between 1 and 100";
    }
    else if(inputElem < randomNumber){
        message.innerHTML = "Your guess is too low";
    }
    else if(inputElem > randomNumber){
        message.innerHTML = "Your guess is too high";
    }
    
    else{
        message.innerHTML = `Correct, the secret number is ${randomNumber}`;

        setTimeout(()=>{
            location.reload();
        }, 5000);
    }
    setTimeout(()=>{
        message.innerHTML = "";
    }, 3000);
}


guessElem.addEventListener("click", getRandomNum);