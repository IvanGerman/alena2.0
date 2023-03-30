import videoSample from './../assets/video/les.mp4';

const video = document.createElement('video');
video.src = videoSample;
video.controls = true;
video.muted = false;
video.height = 480; // in px
video.width = 640; // in px

const videoWrapper = document.querySelector('.section2');
videoWrapper.appendChild(video);
