export function getCutomProperty(el, prop) {
  //console.log(getComputedStyle(el).getPropertyValue(prop));
  return parseFloat(getComputedStyle(el).getPropertyValue(prop) || 0);
}
export function setCutomProperty(el, prop, value) {
  el.style.setProperty(prop, value);
}

export function incrementCutomProperty(el, prop, increment) {
  //console.log(`${el},${prop},${increment}`);
  setCutomProperty(el, prop, getCutomProperty(el, prop) + increment);
}
