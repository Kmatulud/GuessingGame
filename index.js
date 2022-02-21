let guessElem = document.querySelector(".guessBtn");
let input = document.querySelector(".userInput");
let message = document.querySelector(".msg");

// console.log(inputElem);
function getRandomNum(){
    let randomNumber = Math.ceil(Math.random() * 5);
    console.log(randomNumber);
    let inputElem  = input.value;

    if(inputElem > randomNumber){
        message.innerHTML = "Your guess is too high";
    }
    else if(inputElem < randomNumber){
        message.innerHTML = "Your guess is too low";
    }
    else{
        message.innerHTML = "Correct, the secret number is ${randomNumber}";
    }
//     setTimeout(()=>{
//         message.innerHTML = "";
//     }, 10000);
}

guessElem.addEventListener("click", getRandomNum);