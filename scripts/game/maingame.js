'use strict';

let playerX = 1;
let playerO = 2;

function displayLetter(box){
  if (playerX == 1) {
    document.getElementById(box).innerHTML = "X";
    playerX = 0;
  }
  else {
    document.getElementById(box).innerHTML = "O";
    playerX = 1;
  }
};
