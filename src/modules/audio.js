import audio from './../assets/audio/funkytown.mp3';

let sound = new Audio(audio);

const playAudio = () => {
  sound.play();
};
const pauseAudio = () => {
  sound.pause();
};

const playAudioButton = document.querySelector('.play-audio-div');
playAudioButton.addEventListener('click', playAudio);
const pauseAudioButton = document.querySelector('.pause-audio-div');
pauseAudioButton.addEventListener('click', pauseAudio);