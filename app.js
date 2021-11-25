'use strict';

const btnGenerate = document.querySelector('.btn-generate');
const hexColor = document.querySelector('.hex-color');

const randomNumber = () => `#${100000 + Math.trunc(Math.random() * 900000)}`;

btnGenerate.addEventListener('click', function () {
  hexColor.textContent = randomNumber();
  document.querySelector('body').style.backgroundColor = randomNumber();
});
