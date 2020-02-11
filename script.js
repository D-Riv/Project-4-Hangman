//Test game functionality
let wordsArr = [
  "JavaScript",
  "Github",
  "Responsive"
];
let answer = " ";
let incorrect = 6;

function randomWord() {
  let answer = wordsArr[Math.floor(Math.random() * wordsArr.length)];
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
    keypad.appendChild(newKeypad);
  // newKeypad.appendChild(buttons[i]);
  }
  keypadInit.removeEventListener("click", generateButtons);

}


