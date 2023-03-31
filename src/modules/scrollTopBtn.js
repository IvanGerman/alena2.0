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