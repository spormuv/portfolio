'use strict';

import {
  styleSwitcherToggle,
  styleSwitcher,
  switcherColors,
  dayNight,
} from './variables';

// toggle style switcher
styleSwitcherToggle.addEventListener('click', function () {
  styleSwitcher.classList.toggle('open');
});

window.addEventListener('scroll', function () {
  styleSwitcher.classList.remove('open');
});

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
