const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#playTo");

let p1Display = 0;
let p2Display = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener("click", function (e) {
  if (!isGameOver) {
    p1Display += 1;
    if (p1Display === winningScore) {
      isGameOver = true;
      p1Score.classList.add("winner");
      p2Score.classList.add("loser");
    }

    p1Score.textContent = p1Display;
  }
});
p2Button.addEventListener("click", function (e) {
  if (!isGameOver) {
    p2Display += 1;
    if (p2Display === winningScore) {
      isGameOver = true;
      p2Score.classList.add("winner");
      p1Score.classList.add("loser");
    }

    p2Score.textContent = p2Display;
  }
});

winningScoreSelect.addEventListener("change", function (e) {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Display = 0;
  p2Display = 0;
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  p1Score.classList.remove("winner", "loser");
  p2Score.classList.remove("winner", "loser");
}
