'use strict';

import './index.html';
import './style.scss';

// import libraries
import Typed from 'typed.js';

// import modules
import './modules/style_switcher';
import './modules/aside';

// typing animation
const typed = new Typed('.home__info-typing', {
  strings: ['Web Designer', 'Web Developer', 'Graphic Designer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
