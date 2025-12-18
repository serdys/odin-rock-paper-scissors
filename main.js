let roundsPlayed = 0;
let compScore = 0;
let humanScore = 0;
while (roundsPlayed < 5) {
  let comp = getComputerChoice();
  console.log(comp);
  let human = getHumanChoice();
  let winner = getWinner(comp, human);
  if (winner != null) {
    if (winner === "human") {
        humanScore++;
    } else {
        compScore++;
    }
  }
  alert(winner == null ? "its a tie!" : winner + " won! Score: " + humanScore + " " + compScore);
  roundsPlayed++;
}

alert("Final score: " + humanScore + " " + compScore)

function getComputerChoice() {
  let choice = Math.random();
  if (choice >= 0 && choice <= 0.33) {
    return "rock";
  } else if (choice > 0.33 && choice <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("give your choice");
  console.log(choice);
  let possible = ["rock", "paper", "scissors"];
  while (!possible.includes(choice)) {
    choice = prompt("please enter valid choice");
    console.log(choice);
  }
  return choice;
}

function getWinner(comp, human) {
  let winner = "comp";
  switch (comp) {
    case "rock":
      if (human === "paper") {
        winner = "human";
      } else if (human === "rock") {
        winner = null;
      }
      break;
    case "paper":
      if (human === "scissors") {
        winner = "human";
      } else if (human === "paper") {
        winner = null;
      }
      break;
    case "scissors":
      if (human === "rock") {
        winner = "human";
      } else if (human === "scissors") {
        winner = null;
      }
      break;
  }

  return winner;
}
