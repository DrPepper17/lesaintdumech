function runGame() {
    const target = Math.floor(Math.random()*100)+1;
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    do {
        guessString = prompt ('Guess a number between 1 and 100');
        if (guessString === null) {
            return;
        }
        guessNumber = +guessString;
        numTries+=1;
        correct = checkGuess (guessNumber,target);
    } while (!correct);

    alert('Congrats! In '+numTries+' tries, you have guessed '+guessNumber+' which is the correct answer. If you aint a scared, please come and play again sometime.');
}

function checkGuess (guess,answer) {
    let correct = false;
    if (isNaN(guess)) {
        alert('You entered a value other than a number. Please choose a number.');
    }
    else if ((guess<1)||(guess>100)) {
        alert('Your answer is outside acceptable range. Please choose an answer that is between 1 and 100.');
    }
    else if (guess>answer) {
        alert('Your answer is much too high. Please guess again with a a lower number.');
    }
    else if (guess<answer) {
        alert('Your answer is way too low. Guess again higher');
    }
    else {
        correct = true;
    }
    return correct;
}