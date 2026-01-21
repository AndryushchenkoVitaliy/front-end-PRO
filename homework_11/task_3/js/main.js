'use strict';


function showRandom() {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  document.getElementById('randomImage').src =
    `images/image-${randomNumber}.jpg`;
}

showRandom();