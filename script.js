const hands = document.querySelectorAll(".hand");
const userScoreElement = document.querySelector(".user-score");
const drawScoreElement = document.querySelector(".draw-score");
const botScoreElement = document.querySelector(".bot-score");
const choices = ["rock", "paper", "scissors"];

let userScore = 0;
let drawScore = 0;
let botScore = 0;

hands.forEach((hand) => {
    hand.addEventListener("click", () => {
        const userChoice = hand.getAttribute("data-choice");
        const botChoice = choices[Math.floor(Math.random() * 3)];

        const result = determineWinner(userChoice, botChoice);
        updateScores(result); // Update the scores here

        displayResult(userChoice, botChoice, result);

        setTimeout(() => {
            resetHands();
        }, 1000);
    });
});

function determineWinner(user, bot) {
    if (user === bot) return "draw";
    if (
        (user === "rock" && bot === "scissors") ||
        (user === "paper" && bot === "rock") ||
        (user === "scissors" && bot === "paper")
    ) {
        return "user";
    } else {
        return "bot";
    }
}

function displayResult(user, bot, result) {
    const robotImage = document.querySelector(".robot img");
    const resultText = document.querySelector(".choices p");

    robotImage.src = `${bot}.png`;
    resultText.textContent = `You chose ${user}. Bot chose ${bot}.`;

    if (result === "user") {
        resultText.textContent += " You win!";
    } else if (result === "bot") {
        resultText.textContent += " Bot wins!";
    } else {
        resultText.textContent += " It's a draw!";
    }
}

function updateScores(result) {
    if (result === "user") {
        userScore++;
    } else if (result === "bot") {
        botScore++;
    } else {
        drawScore++;
    }

    userScoreElement.textContent = `You: ${userScore}`;
    botScoreElement.textContent = `Bot: ${botScore}`;
    drawScoreElement.textContent = `Draw: ${drawScore}`;
}

function resetHands() {
    hands.forEach((hand) => {
        hand.style.transform = "scale(1)";
    });
}
