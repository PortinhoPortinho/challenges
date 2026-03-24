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
/*
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
  */

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('image 1 loaded', img);
    await wait(1);
    img.style.display = 'none';

    img = await createImage('img/img-2.jpg');
    console.log('image 2 loaded', img);
    await wait(1);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// loadNPause(); // disabled for loadAll test

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const ImgsEl = await Promise.all(imgs);
    console.log(ImgsEl);

    ImgsEl.forEach(img => img.classList.add('paralell'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
