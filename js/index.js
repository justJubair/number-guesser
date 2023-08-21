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
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct, YOU WIN!!`, 'green');
    } else {
        guessLeft -= 1;
        // game over
       if(guessLeft === 0) {
        guessInput.disabled = true;
        guessInput.style.borderColor = 'red';
        setMessage(`Game over, you lost. The correct number was ${winningNum}`);
       } else {
        guessInput.style.borderColor = 'red';
        setMessage(`${guess} is not correct. You have ${guessLeft} guesses left`, 'red')
       }
    }
});

// set message function
function setMessage(msg, color) {
    message.style.color = color;
    message.innerText = msg;
}
