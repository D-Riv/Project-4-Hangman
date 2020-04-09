//Array of random words
let wordsArr = ["github", "git", "grid", "react", "codinganimal"];
let correctAnswers = [];
let incorrectAnswers = [];
let underscore = [];
let incorrectGuessesLeft = 5;
let score = document.querySelector(".score");
score.innerHTML = incorrectGuessesLeft;
let images = [
  "images/head copy.png",
  "images/headtorso copy.png",
  "images/headtorsoarm copy.png",
  "images/headtorsoarms copy.png",
  "images/headtorsoarmsleg copy.png",
  "images/fullbody.png",
];
// console.log(images[0])

//generate random word from words array
let answer = wordsArr[Math.floor(Math.random() * wordsArr.length)];
console.log(answer);
let randomWordArr = answer.split("");
console.log(randomWordArr);

//generate hidden word length character into underscore
function randomWord() {
  for (let i = 0; i < randomWordArr.length; i++) {
    let guessWord = document.createElement("p");
    guessWord.classList.add("unknown");
    guessWord.title = randomWordArr[i];
    guessWord.innerHTML = "_";
    let randomWord = document.querySelector(".random-word");
    randomWord.appendChild(guessWord);
    underscore.push("_");
  }
  return underscore;
}
randomWord();

let underscoreWord = document.querySelector(".random-word");
let alert1 = document.querySelector(".alert");

//initializing keyboard
document.addEventListener("keypress", keyboard);
function keyboard(e) {
  let keycode = e.keyCode;
  let keyPressed = String.fromCharCode(keycode);
  console.log(keyPressed);

  if (randomWordArr.indexOf(keyPressed) > -1) {
    correctAnswers.push(keyPressed);
    underscore[randomWordArr.indexOf(keyPressed)] = keyPressed;
    underscoreWord.innerHTML = underscore.join(" ");
    console.log(underscore);

    if (underscore.join("") == randomWordArr.join("")) {
      alert1.style.display = "block";
    }
  } else {
    incorrectAnswers.push(keyPressed);
    // console.log(incorrectAnswers);
    incorrectAnswers.forEach(function (wrongLetter) {
      console.log(incorrectAnswers.length);
      if (incorrectAnswers.length == 1) {
        document.querySelector(".hangman-image").src = images[0];
        score.innerHTML = 4;
        document.querySelector(".alert").innerHTML =
          "Oof, you can still do this";
        alert1.style.display = "block";
      } else if (incorrectAnswers.length == 2) {
        document.querySelector(".hangman-image").src = images[1];
        score.innerHTML = 3;
        document.querySelector(".alert").innerHTML = "Not looking to bright";
        alert1.style.display = "block";
      } else if (incorrectAnswers.length == 3) {
        document.querySelector(".hangman-image").src = images[3];
        score.innerHTML = 2;
        document.querySelector(".alert").innerHTML = "Rip";
        alert1.style.display = "block";
      } else if (incorrectAnswers.length == 4) {
        document.querySelector(".hangman-image").src = images[4];
        score.innerHTML = 1;
        document.querySelector(".alert").innerHTML =
          "Tell my family I love them";
        alert1.style.display = "block";
      } else if (incorrectAnswers.length == 5) {
        document.querySelector(".hangman-image").src = images[5];
        score.innerHTML = 0;
        document.querySelector(".alert").innerHTML = "YOU LOOSE";
        alert1.style.display = "block";
        document.removeEventListener("keypress", keyboard);
      }
    });
  }
}
//activates start button
let startGame = document.querySelector(".display-game");
let startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("works");
  startGame.style.display = "block";
});

//Ability to initialize and remove keypad
let keypadInit = document.querySelector(".keypad-activator");
let keypad = document.querySelector(".keypad");

function generateButtons() {
  let buttons = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < buttons.length; i++) {
    let newButton = document.createElement("button");
    newButton.classList.add("letter");
    newButton.value = buttons[i];
    newButton.innerHTML = buttons[i];
    keypad.appendChild(newButton);
    // newButton.appendChild(buttons[i]);
  }
}
generateButtons();

//Display keypad
keypadInit.addEventListener("click", generateDisplay);
function generateDisplay() {
  let keypad = document.querySelector(".keypad");

  if (keypad.style.display === "none") {
    keypad.style.display = "block";
  } else {
    keypad.style.display = "none";
  }
}

//restart game
let displayGame = document.querySelector(".display-game");
let restart = document.querySelector(".restart");
restart.addEventListener("click", restartGame);
function restartGame() {
  location.reload(displayGame);
}

//Game logic upon keypad click(checking for the right answer)
let letters = document.querySelectorAll(".letter");
let unknown = document.querySelectorAll(".unknown");

letters.forEach((letter) => {
  letter.addEventListener("click", keypadInput);
});

function keypadInput(e) {
  console.log(e.target.value);

  if (randomWordArr.indexOf(e.target.value) > -1) {
    correctAnswers.push(e.target.value);
    underscore[randomWordArr.indexOf(e.target.value)] = e.target.value;
    underscoreWord.innerHTML = underscore.join(" ");
  } else {
    incorrectAnswers.push(e.target.value);
  }
  console.log(incorrectAnswers);

  if (incorrectAnswers.length == 1) {
    document.querySelector(".hangman-image").src = images[0];
    score.innerHTML = 4;
    document.querySelector(".alert").innerHTML = "Oof, you can still do this";
    alert1.style.display = "block";
  } else if (incorrectAnswers.length == 2) {
    document.querySelector(".hangman-image").src = images[1];
    score.innerHTML = 3;
    document.querySelector(".alert").innerHTML = "Not looking to bright";
    alert1.style.display = "block";
  } else if (incorrectAnswers.length == 3) {
    document.querySelector(".hangman-image").src = images[3];
    score.innerHTML = 2;
    document.querySelector(".alert").innerHTML = "Rip";
    alert1.style.display = "block";
  } else if (incorrectAnswers.length == 4) {
    document.querySelector(".hangman-image").src = images[4];
    score.innerHTML = 1;
    document.querySelector(".alert").innerHTML = "Tell my family I love them";
    alert1.style.display = "block";
  } else if (incorrectAnswers.length == 5) {
    document.querySelector(".hangman-image").src = images[5];
    score.innerHTML = 0;
    document.querySelector(".alert").innerHTML = "YOU LOOSE";
    alert1.style.display = "block";
    document.removeEventListener("click", keypadInput);
  }
}
