import './index.html';
import './index.scss';
import '@babel/polyfill';

import {swiper, swiper2} from './modules/swiper';
import picture from './assets/images/logo.png';
import './modules/audio';
import './modules/video';




// burger menu-----------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger-btn').addEventListener('click', function() {
    document.querySelector('header').classList.toggle('open');
  })
});


//scroll to the top button------------------------------------------------------------------------------------
const calcScrollValue = () => {
  const scrollProgress = document.querySelector('#progress');
  const progressValue = document.querySelector('#progress-value');
  //pos - distance scrolled from the Top of the page to your screen (top line) (y-coord in pixels)
  let pos = document.documentElement.scrollTop;
  //document.documentElement.scrollHeight = entire height of <html>
  //document.documentElement.clientHeight returns the viewable height of an element in pixels
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //scrollValue - how many percent of the entire html-height(without one screen) was scrolled down
  let scrollValue = Math.round( (pos * 100) / calcHeight );
  if ( pos > 100 ) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }
  scrollProgress.addEventListener( 'click', () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;







//const pictureWrap = document.querySelector('.pictureWrap');
const img = new Image();
img.src = picture;
img.width = 50;
//pictureWrap.append(img);
