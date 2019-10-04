// GET ALL Element
const  player = document.querySelector('.player');
const  video = player.querySelector('.viewer');

const Toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranger = player.querySelectorAll('.player__slider');
// function Video
function TogglePlay() {
    const  method = video.paused ? 'play':'pause';
    video[method]();

}
function UpdateButton() {
  const icon = this.paused ? '▶' : '‖';
  Toggle.textContent = icon;
}
function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}
function HandleRange(){
    if (this.name === 'volume'){
        video.volume =  this.value;

    }
    else{
      console.log(1)
      video.plakbackRate = this.value;
    }
    console.log(this.name);
    console.log(this.value);

}


video.addEventListener('click',TogglePlay);
video.addEventListener('play',UpdateButton);
video.addEventListener('pause',UpdateButton);
Toggle.addEventListener('click',TogglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip))
ranger.forEach(range => range.addEventListener('change',HandleRange));

