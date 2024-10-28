let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(result) {
    if (result === 'player') {
        playerScore++;
        document.getElementById('player-score').textContent = playerScore;
    } else if (result === 'computer') {
        computerScore++;
        document.getElementById('computer-score').textContent = computerScore;
    }
}

function displayResult(playerChoice, computerChoice, result) {
    let resultText = '';
    if (result === 'draw') {
        resultText = `It's a draw! You both chose ${playerChoice}.`;
    } else if (result === 'player') {
        resultText = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultText = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
    document.getElementById('result-text').textContent = resultText;
}


