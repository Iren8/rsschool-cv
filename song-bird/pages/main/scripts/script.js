
const video = document.getElementById('video');
const soundOn = document.getElementById('unmuteButton');
const sound__off = document.getElementById('sound__off');

function toggleSound(e) {
  const mutedStatus = video.muted;
  if (mutedStatus == false) {
    video.muted = true;
    sound__off.style.cssText = 'display: block;';
    console.log(false + '->' + true);
  }
  else if (mutedStatus == true) {
    video.muted = false;
    sound__off.style.cssText = 'display: none;';
    console.log(true + '->' + false);
  }
};

soundOn.addEventListener('click', toggleSound);
