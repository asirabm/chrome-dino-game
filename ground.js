import {
  getCutomProperty,
  incrementCutomProperty,
  setCutomProperty,
} from "./updateCustomeProperty.js";
const SPEED = 0.05;
const GroundEl = document.querySelectorAll("[data-ground]");
export function setupGround() {
  //console.log(`setupground`);
  setCutomProperty(GroundEl[0], "--left", 0);
  setCutomProperty(GroundEl[1], "--left", 300);
}

export function updateGround(delta, speedScale) {
  // console.log(`updateground`);
  GroundEl.forEach((ground) => {
    incrementCutomProperty(ground, "--left", delta * speedScale * SPEED * -1);
    if (getCutomProperty(ground, "--left") <= -300) {
      incrementCutomProperty(ground, "--left", 600);
    }
  });
}
