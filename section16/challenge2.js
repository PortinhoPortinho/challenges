'use strict';
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgCnt = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgCnt.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image failed to load'));
    });
  });
};
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('image 1 loaded', img);
    return wait(1);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded', img);
    return wait(1);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
// createImage('img/img-2.jpg').then(img => console.log('image 2 loaded', img));
// createImage('img/img-3.jpg').then(img => console.log('image 3 loaded', img));
