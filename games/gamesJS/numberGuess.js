let max = 100;
let min = 1;
let nGuesses = 0;
let currGuess = 0;

/* getElementById would be fine to use below as well instead of querySelector */
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const higherBtn = document.querySelector("#higherBtn");
const lowerBtn = document.querySelector("#lowerBtn");
const startBtn = document.querySelector("#startBtn");
const guessBtn = document.querySelector("#guessBtn");
const message = document.querySelector("#instructions");
const resetBtn = document.querySelector("#resetBtn");

startBtn.addEventListener("click", tryGuess);
yesBtn.addEventListener("click", rightGuess);
noBtn.addEventListener("click", wrongGuess);
higherBtn.addEventListener("click", numIsHigher);
lowerBtn.addEventListener("click", numIsLower);
resetBtn.addEventListener("click",resetGame);

toggleBtns([startBtn], true);

function tryGuess(){ 
    if (!nGuesses) { // first time guessing
        toggleBtns([startBtn], false);
        toggleBtns([guessBtn], true);
    }
    nGuesses++;    
    currGuess = Math.floor((max - min)/2) + min;
    console.log(`Guessing between ${min} and ${max} - guessing ${currGuess} - this is guess number ${nGuesses}`);
    guessBtn.textContent = currGuess + "!";
    message.textContent = "Am I correct?";
    toggleBtns([yesBtn, noBtn], true);
}

function toggleBtns(btnsArray, on) { 
    for (const btn of btnsArray) {
        if (on) {
            btn.style.display = "inline-block"; 
        } else {
            btn.style.display = "none";
        }
    }
}

function rightGuess() {
    toggleBtns([yesBtn, noBtn], false);
    toggleBtns([resetBtn], true);
    message.textContent = `I guessed your number in ${nGuesses} tries!`;
}

function wrongGuess() {
    toggleBtns([yesBtn, noBtn], false);
    
    let checker = max - min;
    if (checker > 0) {
        toggleBtns([higherBtn, lowerBtn], true);
        message.textContent = `Is your number higher or lower than ${currGuess}?`;  
    }
    else {
        message.textContent = "You're shitting me. Start Over";
        toggleBtns([resetBtn], true);
    } 
} 
  
function numIsHigher() {
    min = currGuess + 1;
    console.log("Changing the minimum to: " + min);
    toggleBtns([higherBtn, lowerBtn], false);
    tryGuess();
}

function numIsLower() {
    max = currGuess - 1;
    console.log("Changing the maximum to: " + max);
    toggleBtns([higherBtn, lowerBtn], false);

    if (currGuess === 1) {
        message.textContent = "You're shitting me. Start Over";
        toggleBtns([resetBtn], true);
    }
    else {
        tryGuess();
    }
}

function resetGame() {
    max = 100;
    min = 1;
    nGuesses = 0;
    currGuess = 0;
    
    toggleBtns([resetBtn], false);
    toggleBtns([startBtn], true);
    toggleBtns([guessBtn], false);
    
    message.textContent = "Think of a number between 1-100 and click the blue button when you're ready.";
}