'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
  <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
  <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
  </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
/*
// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
let getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    
    const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000).toFixed(1)}k people</p>
  <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
  <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
  </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
  });
  };
 
  getCountryData('portugal');
getCountryData('brazil');
//////////////////////////////////////////////////
*/
// new lecture
//ajax
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

/*
///////////////////////////////////////
const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
    const [neighbor] = data.borders;
    if (!neighbor) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbor');
    });
  });
};
// getCountryAndNeighbour('portugal');
getCountryAndNeighbor('brazil');
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

///////////////////////////////////////
// new lecture
//promises and the fetch api

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request);
// country 1
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) return;
      //country 2 - neighbor
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbor'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    });
};

btn.addEventListener('click', function () {
  getCountryData('brazil');
});
getCountryData('portutugal');
*/
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// country 1
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) throw new Error('No neighbor found!');
      //country 2 - neighbor
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        'Country not found',
      );
    })
    .then(data => renderCountry(data[0], 'neighbor'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    });
};
btn.addEventListener('click', function () {
  getCountryData('Brasil');
});
*/
/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000; i++) {}
  console.log(res);
});
console.log('Test end');
const loteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotery draw is happening 🎲');
  setTimeout(function () {
    if (Math.random() > 0.5) {
      resolve('🎉 You won the lotery!');
    } else {
      reject(new Error('😭 You lost the lotery!'));
  }
}, 1000);
});
//////////////////////////////////////////////
//new lecture
loteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
.then(() => {
  console.log('i waited for 1 second');
  return wait(1);
  })
  .then(() => {
    console.log('i waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('i waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('i waited for 4 seconds');
    return wait(1);
  })
  .then(() => console.log('i waited for 5 seconds'));
  
  Promise.resolve('abc').then(x => console.log(x));
  Promise.reject(new Error('Problem')).catch(x => console.log(x));
  */

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => console.log(position),
    //   err => reject(err),
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

console.log('Getting position...');
getPosition().then(pos => console.log(pos));
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
  <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
  <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
  </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
*/
const locateMe = function () {
  getPosition()
    .then(pos => {
      // const lat = pos.coords.latitude;
      // const lng = pos.coords.longitude;
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
      );
    })

    .then(response => response.json())
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
    });
};
btn.addEventListener('click', locateMe);
