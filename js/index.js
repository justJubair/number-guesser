// game values
let min = 1,
    max = 10,
    winningNum = 7,
    guessLeft = 3;

// Define Ui variables
const game = document.getElementById('game'),
      guessInput = document.getElementById('guess-input'),
      guessBtn = document.getElementById('guess-btn'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      message = document.querySelector('.message');

// assign min and max numbers in the UI
minNum.textContent = min;
maxNum.textContent = max;

// add event listener on guess btn 
guessBtn.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    // validate
    if(guess > 10 || guess < 1 || isNaN(guess)) {
        return setMessage(`Please enter a number between ${min} to ${max}`, 'red')
    } 
    // check if won
    if(guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!!`)
        guessInput.value = '';
    } else {
        guessLeft -= 1;
        // game over
       if(guessLeft === 0) {

        gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
        guessInput.value = '';
        // guesses left - game continues
       } else {
        guessInput.style.borderColor = 'red';
        // clear guess input field
        guessInput.value = '';
        setMessage(`${guess} is not correct. You have ${guessLeft} guesses left`, 'red')
       }
    }
});

// add event listener on play again button
game.addEventListener('mousedown',  (e) => {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

// game over function
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    // disabled the input field
    guessInput.disabled = true;
    // change guess input color
    guessInput.style.borderColor = color;
    // set message color
    message.style.color = color;
    setMessage(msg);
    // play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// set message function
function setMessage(msg, color) {
    message.style.color = color
    message.innerText = msg;
}
