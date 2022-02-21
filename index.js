let guessElem = document.querySelector(".guessBtn");
let inputElem = document.querySelector(".userInput");
let message = document.querySelector(".msg");

console.log(inputElem);
function getRandomNum(){
    let randomNumber = Math.ceil((Math.random() * 100));
    console.log(randomNumber);

    if(inputElem > randomNumber){
        message.innerHTML = "Your guess is too high";
    }
    else if(inputElem < randomNumber){
        message.innerHTML = "Your guess is too low";
    }
    else{
        message.innerHTML = "Correct, the secret number is 'randomNumber'";
    }
    setTimeout(()=>{
        message.innerHTML = "";
    }, 5000);
}

guessElem.addEventListener("click", getRandomNum);