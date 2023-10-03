function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);
    let attempts = 0;
    let hasEnded = false;
  
    return function(guess) {
      if (hasEnded) {
        return "The game is over, you already won!";
      }
  
      attempts++;
  
      if (guess < secretNumber) {
        return `${guess} is too low!`;
      } else if (guess > secretNumber) {
        return `${guess} is too high!`;
      } else {
        hasEnded = true;
        return `You win! You found ${secretNumber} in ${attempts} guess${attempts === 1 ? '' : 'es'}.`;
      }
    };
  }
  
  // Example usage:
  let game = guessingGame();
  console.log(game(50)); // "50 is too low!"
  console.log(game(90)); // "90 is too high!"
  console.log(game(70)); // "You win! You found 70 in 3 guesses."
  console.log(game(70)); // "The game is over, you already won!"
  