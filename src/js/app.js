import Action from "./Action";
import Motion from "./Motion";
import Score from "./Score";

const field = document.querySelector(".field");
const cells = document.querySelectorAll(".field-item");
const scoreField = document.querySelector(".score-value");
let currentCells;
let scoreValue = 0;
let mistake = 0;

const action = new Action(field);
const motion = new Motion(cells);
const score = new Score(scoreField);

setInterval(() => {
  let number = Math.floor(Math.random() * 4);
  while (currentCells === number) {
    number = Math.floor(Math.random() * 4);
  }
  if (currentCells !== undefined) {
    motion.deleteImage(currentCells);
  }
  motion.addImage(number);
  currentCells = number;
  mistake++;
  if (mistake > 5) {
    alert("You lose(((");
    scoreValue = 0;
    mistake = 0;
    score.write(scoreValue);
  }
}, 1000);

function handler() {
  scoreValue++;
  score.write(scoreValue);
  if (mistake > 0) {
    mistake--;
  }
  motion.deleteImage(currentCells);
}

action.click(handler);
