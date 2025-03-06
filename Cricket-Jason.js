

function genratComputerChoice() {
  let randomVal = Math.random() * 3
  let computerChoice;
  if (randomVal > 0 && randomVal <= 1) {
    computerChoice = 'Bat';
  } else if (randomVal > 1 && randomVal <= 2) {
    computerChoice = 'Ball'
  }
  else {
    computerChoice = 'Stump'
  };
  return computerChoice;
};


let scorStr = localStorage.getItem('finalResult');
let finalResult = '';
resetScore(scorStr);
function resetScore(scorStr) {
  finalResult = scorStr ? JSON.parse(scorStr) : {
    'You-won': 0,
    'you-Loss': 0,
    tie: 0,
  };


  finalResult.displayScore = function scor() {
    return ` Win: ${finalResult["You-won"]} Loss ${finalResult["you-Loss"]} Tie: ${finalResult.tie}`
  };
  resultFinal();

}



function ourResults(ourMove, computerMove) {

  if (ourMove === 'Bat') {
    if (computerMove === 'Ball') {
      finalResult["You-won"]++

      return 'your won the Match';
    } else if (computerMove === 'Bat') {

      finalResult.tie++
      return 'it,s Match a tie';
    } else if (computerMove === 'Stump') {
      finalResult["you-Loss"]++
      return 'Computer is Won';
    }
  } else if (ourMove === 'Ball') {
    if (computerMove === 'Ball') {

      finalResult.tie++

      return 'it,s Match a tie';
    } else if (computerMove === 'Bat') {

      finalResult["you-Loss"]++

      return 'Computer is Won';
    } else if (computerMove === 'Stump') {

      finalResult["You-won"]++

      return 'your won the Match';
    }

  } else {
    if (computerMove === 'Ball') {
      finalResult["You-won"]++

      return 'your won the Match';
    } else if (computerMove === 'Bat') {

      finalResult["you-Loss"]++

      return 'Computer is Won';
    } else if (computerMove === 'Stump') {

      finalResult.tie++

      return 'it,s Match a tie';
    }

  }
}

function resultFinal(ourMove, computerMove, result) {
  localStorage.setItem('finalResult', JSON.stringify(finalResult))
  document.querySelector('#our-move').innerHTML =
    ourMove ? `You have choce ${ourMove}` : "";
  document.querySelector('#computer-move').innerHTML =
    computerMove ? `computer choice is ${computerMove}` : '';
  document.querySelector('#result').innerHTML =
    result ? `${result}` : '';
  document.querySelector('#Score').innerHTML = `${finalResult.displayScore()}`;
  // alert(`You have choce ${ourMove} ,computer choice is ${computerMove} and
  //    ${result}
  //    ${finalResult.displayScore()}`)

  // console.log(finalResult);

}