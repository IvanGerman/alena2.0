document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger-btn').addEventListener('click', function() {
    document.querySelector('header').classList.toggle('open');
  })
});