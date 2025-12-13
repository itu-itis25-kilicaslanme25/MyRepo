const choices = ["rock", "paper", "scissors"];
const container = document.getElementById("choices");
const resultEl = document.getElementById("result");

container.addEventListener("click", (e) => {
  const btn = e.target.closest("button"); // ensures we get the button
  if (!btn) return;

  const playerChoice = btn.getAttribute("data_choice"); // robust attribute read
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const winner = getWinner(playerChoice, computerChoice);

  resultEl.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${winner}`;
});

function getWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "You win!";
  return "Computer wins!";
}
