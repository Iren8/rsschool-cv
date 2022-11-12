
const video = document.getElementById('video');
const soundOn = document.getElementById('unmuteButton');
soundOn.addEventListener('click', function () {
  video.muted = false;
});

