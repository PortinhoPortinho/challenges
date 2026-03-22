'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//button scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth,
  );
  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset,
  // );

  // window.scrollTo({
  //   top: s1coords.top + window.pageYOffset,
  //   left: s1coords.left + window.pageXOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////
//page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// ADD EVENT LISTENER TO COMMON PARENT ELEMENT

//maching strategy
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//////////////////////////////////////////////
//tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //guard clause
  if (!clicked) return;

  //remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //activate tab
  clicked.classList.add('operations__tab--active');

  //activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//////////////////////////////////////////////
//menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
//////////////////////////////////////////////////
//sticky navigation
/*
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.pageYOffset > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/
/////////////////////////////////////////////////
//sticky navigation: Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
// });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0,0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////////
//reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
///////////////////////////////////
//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
////////////////////////////////////////
//slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;
  // const slider = document.querySelector('.slider');
  // slider.style.overflow = 'visible';
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  ////////////////////////////////////////
  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`,
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
    );
  };
  ///////////////////////////////////////////
  // go to next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };
  // go to previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};
slider();
//////////////////////////////////////////

//new lecture
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section-1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
'We use cookied for improved functionality and analitics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

///delete elements
document
.querySelector('.btn--close-cookie')
.addEventListener('click', function () {
  message.remove();
  // message.parentElement.removeChild(message);
  });
  
  //////////////////////////////////////////
  
  //new lecture
  
  //styles
  
  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';
  
  console.log(message.style.backgroundColor);
  console.log(message.style.height);
  console.log(getComputedStyle(message).backgroundColor);
  console.log(getComputedStyle(message).height);
  console.log(getComputedStyle(message).color);
  
  message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
  
  document.documentElement.style.setProperty('--color-primary', 'orangered');
  // atributes
  
  const logo = document.querySelector('.nav__logo');
  console.log(logo.alt);
  
  console.log(logo.className);
  logo.alt = 'bealtyful minimalist logo';
  //non standard
  console.log(logo.designer);
  console.log(logo.getAttribute('designer'));
  logo.setAttribute('company', 'Bankist');
  
  console.log(logo.src);
  console.log(logo.getAttribute('src'));
  
  const link = document.querySelector('.nav__twitter--btn');
  // console.log(link.href);
  // console.log(link.getAttribute('href'));
  // data atribute
  console.log(logo.dataset.versionNumber);
  //classes
  logo.classList.add('c, j');
  logo.classList.remove('c, j');
  logo.classList.toggle('c, j');
  logo.classList.contains('c, j');
  
  //dont use
  logo.className = 'jonas';
  ///////////////////////////////////////////
  //new lecture
  const btnScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    
    console.log(e.target.getBoundingClientRect());
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
    
    console.log(
      'height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth,
      );
      //scrolling
      // window.scrollTo(
        //   s1coords.left + window.pageXOffset,
        //   s1coords.top + window.pageYOffset,
        // );
        
        // window.scrollTo({
      //   top: s1coords.top + window.pageYOffset,
      //   left: s1coords.left + window.pageXOffset,
      //   behavior: 'smooth',
      // });
      
      section1.scrollIntoView({ behavior: 'smooth' });
      });
      ///////////////////////////////////////////
      //new lecture
      const h1 = document.querySelector('h1');
      
      const alertH1 = function (e) {
        alert('addEventListener: Great! You are reading the heading :D');
        // we can remove the event listener after the first time it is called but can remove after some time with settimeout
        // h1.removeEventListener('mouseenter', alertH1);
        };
        
        h1.addEventListener('mouseenter', alertH1);
        
        setTimeout(() => {
          h1.removeEventListener('mouseenter', alertH1);
          }, 3000);
          //this is the same as but is the old way of doing it
          // h1.onmouseenter = function (e) {
      //   alert('onmouseenter: Great! You are reading the heading :D');
      // };
      
      ///////////////////////////////////////////
      //new lecture
      
      //rgb(255,255,255
      const randomInt = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);
      const randomColor = () =>
        `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
      
      console.log(randomColor(0, 255));
      
      document.querySelector('.nav__link').addEventListener('click', function (e) {
        console.log('LINK', e.target, e.currentTarget);
        this.style.backgroundColor = randomColor();
        // stopPropagation
        e.stopPropagation();
      });
      
      document.querySelector('.nav__links').addEventListener('click', function (e) {
        console.log('CONTAINER', e.target, e.currentTarget);
        this.style.backgroundColor = randomColor();
        });
      
      document.querySelector('.nav').addEventListener(
        'click',
        function (e) {
          console.log('NAV', e.target, e.currentTarget);
          this.style.backgroundColor = randomColor();
        },
        //true or false to get to fist in the event chain
      );
      
      /////////////////////////////////////////////
      //new lecture
      
      const h1 = document.querySelector('h1');
      console.log(h1.querySelectorAll('.highlight'));
      console.log(h1.childNodes);
      console.log(h1.children);
      
      h1.firstElementChild.style.color = 'white';
      h1.lastElementChild.style.color = 'orangered';
      
      // going upwards: parents
      console.log(h1.parentNode);
      console.log(h1.parentElement);
      h1.closest('.header').style.background = 'var(--gradient-secondary)';
      h1.closest('.h1').style.background = 'var(--gradient-primary)';
      
      // going downwards: children
      console.log(h1.previousElementSibling);
      console.log(h1.nextElementSibling);
      console.log(h1.nextSibling);
      console.log(h1.previousSibling);
      
      console.log(h1.parentElement.children);
      [...h1.parentElement.children].forEach(function (el) {
        if (el !== h1) el.style.transform = 'scale(0.5)';
      });
      ///////////////////////////////////////////////////
      // menu fade animation with mouseover
      nav.addEventListener('mouseover', function (e) {
        handleHover(e, 1);
        if (e.target.classList.contains('nav__link')) {
          const link = e.target;
          const siblings = link.closest('.nav').querySelectorAll('.nav__link');
          const logo = link.closest('.nav').querySelector('img');
          
          siblings.forEach(el => {
            if (el !== link) el.style.opacity = 0.5;
          });
          
          logo.style.opacity = 0.5;
        }
      });
      
      nav.addEventListener('mouseout', function (e) {
        handleHover(e, 1);
        
        if (e.target.classList.contains('nav__link')) {
          const link = e.target;
          const siblings = link.closest('.nav').querySelectorAll('.nav__link');
          const logo = link.closest('.nav').querySelector('img');
          
          siblings.forEach(el => {
            if (el !== link) el.style.opacity = 1;
          });
          
          logo.style.opacity = 1;
        }
        });
        ///////////////////////////////////////
        // new lecture
        document.addEventListener('DOMContentLoaded', function (e) {
          console.log('HTML parsed and DOM tree built!', e);
        });
        
        window.addEventListener('load', function (e) {
          console.log('Page fully loaded', e);
        });
        
        window.addEventListener('beforeunload', function (e) {
          e.preventDefault();
          console.log(e);
          e.returnValue = '';
        });
        
        */
