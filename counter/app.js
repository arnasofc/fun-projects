'use strict';

const btnDecrease = document.querySelector('.decrease');
const btnIncrease = document.querySelector('.increase');
const btnReset = document.querySelector('.reset');

const stringMovement = document.querySelector('.movement');

let movementChange = 0;

btnDecrease.addEventListener('click', function () {
  movementChange--;
  if (movementChange < 0) stringMovement.style.color = 'red';
  stringMovement.textContent = movementChange;
});

btnIncrease.addEventListener('click', function () {
  movementChange++;
  if (movementChange > 0) stringMovement.style.color = 'green';
  stringMovement.textContent = movementChange;
});

btnReset.addEventListener('click', function () {
  movementChange = 0;
  if (movementChange === 0) stringMovement.style.color = 'inherit';
  stringMovement.textContent = movementChange;
});
