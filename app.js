'use strict';

const btnHex = document.querySelector('.btn-generate-hex');
const btnRgba = document.querySelector('.btn-generate-rgba');
const hexColor = document.querySelector('.hex-color');

const randomNumb = (from, to) => from + Math.trunc(Math.random() * to);

btnHex.addEventListener('click', function () {
  hexColor.textContent = `#${randomNumb(100000, 900000)}`;
  document.querySelector('body').style.backgroundColor = `#${randomNumb(100000, 900000)}`;
});

btnRgba.addEventListener('click', function () {
  let a = randomNumb(100, 255);
  let b = randomNumb(100, 255);
  let c = randomNumb(100, 255);
  hexColor.textContent = `Rgb(${a},${b},${c})`;
  document.querySelector('body').style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
});
