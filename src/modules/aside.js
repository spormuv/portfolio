'use strict';

import { nav, asideLink, allSections } from './variables';

nav.addEventListener('click', function (e) {
  asideLink.forEach((link, i) => {
    if (link.classList.contains('active')) {
      allSections.forEach((section) =>
        section.classList.remove('back-section')
      );
      allSections[i].classList.add('back-section');
    }
  });

  if (e.target.classList.contains('aside__link')) {
    asideLink.forEach((link) => link.classList.remove('active'));
    e.target.classList.add('active');

    showSection(e.target);
  }
});

const showSection = function (elem) {
  const [, target] = elem.getAttribute('href').split('#');
  allSections.forEach((section) => section.classList.remove('active'));
  document.querySelector(`#${target}`).classList.add('active');
};
