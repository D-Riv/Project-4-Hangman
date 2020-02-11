//Array of random words
let wordsArr = [
  "javascript",
  "github",
  "git",
  "responsive",
  "flexbox",
  "grid",
  "react",
  "asynchronous"
];
// let answer = " ";
let incorrect = 6;

//pick random word from array
function randomWord() {
  let answer = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  console.log(answer);

//generate hidden word length character into "_"
  for(let i = 0; i < answer.length; i++) {
    let guessWord = document.createElement("p");
    guessWord.classList.add("letter");
    guessWord.innerHTML = "_"
    let randomWord = document.querySelector(".random-word");
    randomWord.appendChild(guessWord);
  }
}
randomWord();


//Ability to initialize and remove keypad
let keypadInit = document.querySelector(".keypad-activator");
let keypad = document.querySelector(".keypad");

keypadInit.addEventListener("click", generateButtons);
function generateButtons() {
  let buttons = "abcdefghijklmnopqrstuvwxyz".split("");
  for(let i = 0; i < buttons.length; i++) {
    let newKeypad = document.createElement("button");
    newKeypad.classList.add("letter");
    newKeypad.innerHTML = buttons[i];
    keypad.appendChild(newKeypad);
  // newKeypad.appendChild(buttons[i]);
  }
  keypadInit.removeEventListener("click", generateButtons);

  keypadInit.addEventListener("click", removeButtons);
  function removeButtons() {
    let newKeypad = document.querySelectorAll(".letter")
    for(let i = 0; i < newKeypad.length; i++) {
    keypad.removeChild(newKeypad[i]);
    }
  }
}


//restart game
let displayGame = document.querySelector(".display-game")
let restart = document.querySelector(".restart");
restart.addEventListener("click", restartGame);
function restartGame() {
  location.reload(displayGame);
}












