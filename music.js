const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const title = document.querySelector('.title');
const cover = document.querySelector('#cover');
const audio = document.querySelector('#audio');
const btn = document.querySelector('#myBtn')
const progress = document.querySelector('.progress');
const progressCont = document.querySelector('.progress-container');

let songs = ['Nig', 'Uk', 'SdA'];
let songIndex = 2;
loadSong(songs[1])

function loadSong(song){
  title.innerText = song;
  cover.src = `../image/${song}.webp`;
  audio.src = `music/${song}.mp3`;
}

 function playSong() {
   musicContainer.classList.add('play');
   btn.classList.remove('plays');
   btn.classList.add('pause');
   audio.play();
 }
 function pauseSong() {
   musicContainer.classList.remove('play');
   btn.classList.add('plays');
   btn.classList.remove('pause');
   
   audio.pause();
 }
 
 
function prevSong() {
   songIndex--
   if(songIndex < 0) {
     songIndex = songs.length - 1
   }
   loadSong(songs[songIndex]);
   playSong();
 }
 
 
 function nextSong() {
   songIndex++
   if(songIndex > songs.length - 1) {
     songIndex = 0;
   }
   loadSong(songs[songIndex]);
   playSong();
 }
 
 function updateprogress(e) {
   const {duration, currentTime} = e.srcElement;
  let  w = (currentTime/duration * 100);
  progress.style.width = `${w}%`
 }
 
 function setProgress(e) {
   const width = this.clientWidth;
   const clickX = e.offsetX;
   const duration = audio.duration;
   
   audio.currentTime = (clickX / width) * duration
 }
 
 
 /*EventListener*/
playBtn.addEventListener('click', () => {
 let isplaying = musicContainer.classList.contains('play');
  if(!isplaying) {
    playSong()
  } else {
    pauseSong()
  }
})
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
audio.addEventListener('timeupdate', updateprogress);
progressCont.addEventListener('click', setProgress)