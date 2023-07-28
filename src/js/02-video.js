import Player from '@vimeo/player';
const throttleTime = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storageKeyTime = 'videoplayer-current-time';
// Відстеження оновлення часу та збереження у локадьне сховище
// із затримкою в 1 секунду, використовуючи бібліотеку lodash
player.on('timeupdate', throttleTime(saveCurrentTime, 1000));
function saveCurrentTime({ seconds }) {
  localStorage.setItem(storageKeyTime, Math.round(seconds));
}
const seconds = localStorage.getItem(storageKeyTime)
// Відновлення програвання зі збереженої позиції
player
function setTime() {
  const seconds = localStorage.getItem(storageKeyTime);
  if (seconds) {
    player.setCurrentTime(seconds);
  }
}

setTime();
    
  
