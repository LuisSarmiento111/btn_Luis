
const button2 = document.querySelector("button");

button2.addEventListener("click",guessingGame); 

function guessingGame() {
    let number = parseInt((Math.random() * 10) + 1);
    let guess = prompt("Guess a number from 1-10:")
    while (guess != number) {
        guess = prompt("Guess a number from 1-10:")
    }
    button2.textContent = 'YOU WIN!!!';
}