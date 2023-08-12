import {
  incrementCutomProperty,
  setCutomProperty,
} from "./updateCustomeProperty.js";

const dinoEl = document.querySelector("[data-dino]");
const JUMP_SPEED = 0.45;
const GRAVITY = 0.011;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;
let yVelocity;
export function setupDino() {
  //console.log(`setupDino`);
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  yVelocity = 0;
  setCutomProperty(dinoEl, "--bottom", 0);
  document.addEventListener("keydown", onJump);
}

export function updateDino(delta, speedScale) {
  //console.log(currentFrameTime);
  //console.log(`updateDino`);
  handleRun(delta, speedScale);
  handleJump(delta);
}
function handleJump(delta) {
  console.log("Hello");
  if (!isJumping) return;
  console.log("Hello");
  incrementCutomProperty(dinoEl, "--bottom", yVelocity * delta);
}
function handleRun(delta, speedScale) {
  if (isJumping) {
    dinoEl.src = `images/dino-stationary.png`;
    return;
  }
  if (currentFrameTime >= 1) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
    dinoEl.src = `images/dino-run-${dinoFrame}.png`;
    currentFrameTime -= FRAME_TIME;
  }
  currentFrameTime += delta * speedScale;
}
function onJump(e) {
  console.log("Jumpinf");
  console.log(e.code);
  console.log(isJumping);
  if (e.code !== "space" || isJumping) return;
  console.log("Jumpinfakscnk");
  yVelocity = JUMP_SPEED;
  isJumping = true;
}
