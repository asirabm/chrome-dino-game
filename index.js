import { setupGround, updateGround } from "./ground.js";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
const SPEED_SCALE_INCRESE = 0.00001;
const mainElemt = document.querySelector("[data-main]");
const scoreEl = document.querySelector("[data-score]");
const startScreenEl = document.querySelector("[data-start-screen]");
//console.log(mainElemt);
window.addEventListener("resize", setPixelToMainScale);
setPixelToMainScale();
setupGround();
window.addEventListener("keydown", startGame, { once: true });
let LastTime;
let speedScale;
let score;

function setPixelToMainScale() {
  let mainToPixelScale;
  let a = window.innerWidth / window.innerHeight;
  let b = WORLD_WIDTH / WORLD_HEIGHT;
  if (a < b) {
    mainToPixelScale = window.innerWidth / WORLD_WIDTH;
  } else {
    mainToPixelScale = window.innerHeight / WORLD_HEIGHT;
  }
  mainElemt.style.width = `${WORLD_WIDTH * mainToPixelScale}px`;
  mainElemt.style.height = `${WORLD_HEIGHT * mainToPixelScale}px`;
}

function update(time) {
  if (LastTime == null) {
    LastTime = time;
    window.requestAnimationFrame(update);
    return;
  }
  let delta = time - LastTime;
  updateGround(delta, speedScale);
  updateSpeedScale(delta);
  updateScore(delta);
  LastTime = time;
  window.requestAnimationFrame(update);
}
function updateScore(delta) {
  score += delta * 0.01;

  scoreEl.textContent = Math.floor(score);
}
function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INCRESE;
}

function startGame() {
  LastTime = null;
  speedScale = 1;
  score = 0;
  startScreenEl.classList.add("hide");
  window.requestAnimationFrame(update);
}
