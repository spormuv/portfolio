'use strict';

import './index.html';
import './style.scss';

// import libraries
import Typed from 'typed.js';

// variables
const styleSwitcher = document.querySelector('.switcher');
const styleSwitcherToggle = document.querySelector('.switcher__toggle');
const switcherColors = document.querySelector('.switcher__colors');
const dayNight = document.querySelector('.switcher__phase');
const nav = document.querySelector('.aside__nav');
const asideLinks = document.querySelectorAll('.aside__link');
const allSections = document.querySelectorAll('.section');
const navTogglerBtn = document.querySelector('.aside__toggler');
const aside = document.querySelector('.aside');
const btnHire = document.querySelector('.btn_hire');

/*---------- typing animation
-----------------------------------------------*/
const typed = new Typed('.home__info-typing', {
  strings: ['Web Designer', 'Web Developer', 'Graphic Designer'],
  typeSpeed: 100,
  loop: true,
  fadeOut: true,
  fadeOutDelay: 200,
});

/*---------- style switcher
-----------------------------------------------*/

// toggle style switcher
styleSwitcherToggle.addEventListener('click', () =>
  styleSwitcher.classList.toggle('open')
);

allSections.forEach((section) =>
  section.addEventListener('scroll', () =>
    styleSwitcher.classList.remove('open')
  )
);

// theme color
switcherColors.addEventListener('click', function (e) {
  if (e.target.nodeName === 'SPAN') {
    const bgColor = getComputedStyle(e.target).backgroundColor;
    document.documentElement.style.setProperty('--skin-color', bgColor);
  }
});

// theme light / dark
window.addEventListener('load', function () {
  if (document.body.classList.contains('dark')) {
    dayNight.firstElementChild.classList.add('fa-sun');
  } else {
    dayNight.firstElementChild.classList.add('fa-moon');
  }
});

dayNight.addEventListener('click', function () {
  dayNight.firstElementChild.classList.toggle('fa-sun');
  dayNight.firstElementChild.classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
});

/*---------- aside
-----------------------------------------------*/

// functions
function removeBackSection() {
  allSections.forEach((section) => section.classList.remove('back-section'));
}

function addBackSection(i) {
  allSections[i].classList.add('back-section');
}

function showSection(elem) {
  const [, target] = elem.getAttribute('href').split('#');
  allSections.forEach((section) => section.classList.remove('active'));
  const section = document.querySelector(`#${target}`);
  section.classList.add('active');
  section.scrollTop = 0;
}

function updateNav(elem) {
  asideLinks.forEach((link) => {
    link.classList.remove('active');
    const target = elem.getAttribute('href').split('#')[1];
    if (target === link.getAttribute('href').split('#')[1]) {
      link.classList.add('active');
    }
  });
}

function asideHide() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  allSections.forEach((section) => section.classList.toggle('open'));
}

// listeners
nav.addEventListener('click', function (e) {
  removeBackSection();
  asideLinks.forEach((link, i) => {
    if (link.classList.contains('active')) {
      addBackSection(i);
    }
  });

  if (e.target.classList.contains('aside__link')) {
    asideLinks.forEach((link) => link.classList.remove('active'));
    e.target.classList.add('active');

    showSection(e.target);
    if (window.innerWidth < 1200) {
      asideHide();
    }
  }
});

btnHire.addEventListener('click', function () {
  const sectionIndex = this.getAttribute('data-section-index');
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

navTogglerBtn.addEventListener('click', () => {
  asideHide();
});
