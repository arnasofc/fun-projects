'use strict';

const right = document.querySelector('.right');
const left = document.querySelector('.left');
const howManyReviews = document.getElementsByClassName('trans');

let counter = 1;

const boxSelection = (count) => document.querySelector(`.reviewBox-${count}`);

const counterLogicRight = () => {
  counter++;
  if (counter > howManyReviews.length) counter = 1;
};

const counterLogicLeft = () => {
  counter--;
  if (counter < 1) counter = howManyReviews.length;
};

function nerodyt() {
  for (let i = 1; i <= howManyReviews.length; i++) {
    boxSelection(i).classList.add('hidden');
  }
}

const reviewLogic = function () {
  const box = {
    1: function (rodyt) {
      boxSelection(rodyt).classList.remove('hidden');
    },
  };
  return box;
};

right.addEventListener('click', function () {
  nerodyt();
  counterLogicRight();
  reviewLogic()[1](counter);
});

left.addEventListener('click', function () {
  nerodyt();
  counterLogicLeft();
  reviewLogic()[1](counter);
});
