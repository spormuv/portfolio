'use strict';

import {
  styleSwitcherToggle,
  styleSwitcher,
  switcherColors,
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
