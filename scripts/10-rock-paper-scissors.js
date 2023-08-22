let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = null
  if (randomNumber >= 0 && randomNumber < 1/5){
    computerMove = 'rock'
  } else if (randomNumber >= 1/5 && randomNumber < 2/5){
    computerMove = 'paper'
  } else if (randomNumber >= 2/5 && randomNumber < 3/5){
    computerMove = 'scissors'
  } else if (randomNumber >= 3/5 && randomNumber < 4/5){
    computerMove = 'fire'
  } else if (randomNumber >= 4/5 && randomNumber < 1){
    computerMove = 'waterballoon'
  }
  return computerMove;
}

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'rock'){
    if (computerMove === 'rock'){
      result = 'Tie.'
    } else if(computerMove === 'paper'){
      result = 'You Lose.'
    } else if(computerMove === 'scissors'){
      result = 'You Win.'
    } else if(computerMove === 'fire'){
      result = 'You Lose.'
    } else if(computerMove === 'waterballoon'){
      result = 'You Win.'
    }
  }

  else if (playerMove === 'paper'){
    if (computerMove === 'rock'){
      result = 'You Win.'
    } else if(computerMove === 'paper'){
      result = 'Tie.'
    } else if(computerMove === 'scissors'){
      result = 'You Lose.'
    } else if(computerMove === 'fire'){
      result = 'You Lose.'
    } else if(computerMove === 'waterballoon'){
      result = 'You Win.'
    }
  }
  else if (playerMove === 'scissors'){
    if (computerMove === 'rock'){
    result = 'You Lose.'
    } else if(computerMove === 'paper'){
      result = 'You Win.'
    } else if(computerMove === 'scissors'){
      result = 'Tie.'
    } else if(computerMove === 'fire'){
      result = 'You Lose.'
    } else if(computerMove === 'waterballoon'){
      result = 'You Win.'
    }
  }

  else if (playerMove === 'fire'){
    if (computerMove === 'fire'){
      result = 'Tie.'
    } else if(computerMove === 'waterballoon'){
      result = 'You Lose.'
    } else {
      result = 'You Win.'
    }
  }

  else if (playerMove === 'waterballoon'){
    if (computerMove === 'waterballoon'){
      result = 'Tie.'
    } else if (computerMove === 'scissors' || computerMove === 'rock') {
      result = 'You Lose.'
    } else {
      result = 'You Win.'
    }
  }

  if(result === 'You Win.'){
    score.wins += 1;
  } else if(result === 'You Lose.'){
    score.losses += 1;
  } else if(result === 'Tie.'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}
