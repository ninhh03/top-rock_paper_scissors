//Option
//1. Rock
//2. Paper
//3. Scissors

let computerScore = 0
let humanScore = 0

function getComputerChoice() {
    let optionComputer = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    if(optionComputer === 1) {
        return "Rock"
    }
    else if(optionComputer === 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let optionHuman = parseInt(prompt("Please choose number:\n1. Rock\n2. Paper \n3. Scissors"))
    if(optionHuman === 1) {
        return "Rock"
    }
    else if(optionHuman === 2) {
        return "Paper"
    }
    else if (optionHuman === 3) {
        return "Scissors"
    }
    else {
        return "Choose again"
    }
}

function playRound(computerChoice, humanChoice) {
    if(computerChoice === "Rock" && humanChoice === "Scissors" ||
        computerChoice === "Paper" && humanChoice === "Rock" ||
        computerChoice === "Scissors" && humanChoice === "Paper") {
        return "Computer wins"
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper") {
        return "Human wins"
    }
    else if(computerChoice === humanChoice) {
        return "Draw"
    }
    else {
        return "Choose again"
    }
}

function trackScore(result) {
    if(result === "Computer wins") {
        computerScore++;
    }
    if(result === "Human wins") {
        humanScore++;
    } 
}

function playGame() {
    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice()
    let result = playRound(computerChoice, humanChoice)

    if(humanChoice === "Choose again") {
        console.log(`${result}`)
    }
    else {
        trackScore(result)
        console.log(`${result}\nComputer choice: ${computerChoice}\nHuman choice: ${humanChoice}\nComputer score: ${computerScore}\nHuman score: ${humanScore}`)
    }
}

function checkScore(computerScore, humanScore) {
    console.log("-----------")
    if(computerScore > humanScore) {
        console.log("Computer is winner")
    }
    else if (computerScore < humanScore) {
        console.log("Human is winner")
    }
    else {
        console.log("Draw")
    }
}

playGame()
playGame()
playGame()
playGame()
playGame()
checkScore(computerScore, humanScore)