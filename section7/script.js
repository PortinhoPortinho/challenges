'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if the input is empy or different from a number when clicking on check
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    //if the number is correct when clicking on check
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#a2c797';
    document.querySelector('.number').style.width = '30rem';
    if (score > Number(document.querySelector('.highscore').textContent)) {
      document.querySelector('.highscore').textContent = score;
    }
    //if the number is higher than the secret number when clicking on check
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = '#b48585';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    }

    //if the number is lower than the secret number when clicking on check
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = '#b48585';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
