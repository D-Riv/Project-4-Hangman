//Test game functionality
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
let answer = " ";
let incorrect = 6;

function randomWord() {
  let answer = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  console.log(answer);
}
randomWord();

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
    console.log(newKeypad);

    }
  }
}


