// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';


// Carousel

import Swiper from 'swiper';
import 'swiper/css';

const swiperHeader = new Swiper(".swiperHeader", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 20000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});



// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import TestComponent from './js/components/test.js';

document.addEventListener('DOMContentLoaded', function () {
  const showTest = document.getElementById('showTest');
  if (showTest) {
    const root = ReactDOM.createRoot(showTest);
    root.render(<TestComponent />);
  }
});