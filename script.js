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
let incorrect = 6;


//pick random word from array
let answer = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  console.log(answer);
let spread = answer.split("")
console.log(spread);

//generate hidden word length character into "_"
function randomWord() {
  for(let i = 0; i < spread.length; i++) {
    let guessWord = document.createElement("p");
    guessWord.classList.add("unknown", spread[i]);
    guessWord.innerHTML = "_"
    let randomWord = document.querySelector(".random-word");
    randomWord.appendChild(guessWord);
  }
}
randomWord();


//Ability to initialize and remove keypad
let keypadInit = document.querySelector(".keypad-activator");
let keypad = document.querySelector(".keypad");

function generateButtons() {
  let buttons = "abcdefghijklmnopqrstuvwxyz".split("");
  for(let i = 0; i < buttons.length; i++) {
    let newButton = document.createElement("button");
    newButton.classList.add("letter");
    newButton.value =buttons[i]
    newButton.innerHTML = buttons[i];
    keypad.appendChild(newButton);
  // newButton.appendChild(buttons[i]);
  }
}
generateButtons();

keypadInit.addEventListener("click", generateDisplay);
function generateDisplay() {
  let keypad = document.querySelector(".keypad");

  if(keypad.style.display === "none") {
    keypad.style.display = "block";
  }else {
    keypad.style.display = "none";
  }
}


//restart game
let displayGame = document.querySelector(".display-game")
let restart = document.querySelector(".restart");
restart.addEventListener("click", restartGame);
function restartGame() {
  location.reload(displayGame);
}

// console.log(answer.split("").value);

//Game logic upon keypad click
let letters = document.querySelectorAll(".letter");
let unknown = document.querySelectorAll(".unknown");

for(let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", click);
  function click() {
    console.log(letters[i].value);
    for(let i = 0; i < spread.length, i < unknown.length; i++) {
      if(letters[i].value === spread[i].value) {
        unknown[i].innerHTML = spread[i].value;
      }
    }
    



  }
}










