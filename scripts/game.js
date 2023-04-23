"use strict";

let button;
let click_count = 0;
let time_interval = 1000;
let level = 1;

let moveButton = function () {
  let marginTop = Math.floor(Math.random() * window.innerHeight);
  let marginLeft = Math.floor(Math.random() * window.innerWidth);
  button.style.marginTop = marginTop + "px";
  button.style.marginLeft = marginLeft + "px";
};

document.addEventListener("DOMContentLoaded", () => {
  button = document.querySelector(".btn");
  button.addEventListener("click", () => {
    if (click_count >= 3) {
      if (level === 5) {
        alert("You have reached the maximum level");
        clearInterval(interval);
        return;
      }
      level++;
      click_count = 0;
      time_interval -= 100;
      clearInterval(interval);
      interval = setInterval(() => {
        moveButton();
      }, time_interval);
      alert("You have reached level " + level);
    } else {
      click_count += 1;
    }
  });
});

let interval = setInterval(() => {
  moveButton();
}, time_interval);
