const humberger = document.querySelector('.navbar-toggler');
const stickyTop = document.querySelector('.sticky-top');

humberger.addEventListener('click', function() {
    stickyTop.style.overflow ='visible';
});

const btnClose = document.querySelector('.btn-close');
btnClose.addEventListener('click', function(){
    stickyTop.style.overflow = 'hidden';
});



const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
let isPlaying = false;
const song = document.querySelector("#song");

function disableScroll(){
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;



  window.onscroll = function(){
      window.scrollTo(scrollTop, scrollLeft);
  }

  const audioIconWrapper = document.querySelector('.audio-icon-wrapper')

  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
  window.onscroll = function () { }
  rootElement.style.scrollBehavior = 'smooth';
 
 // localStorage.setItem('opened', 'true');
 playAudio();
}



function playAudio() {

song.volume = 0.1;
audioIconWrapper.style.display = 'flex';
song.play();
isPlaying = true;
}

audioIconWrapper.onclick = function(){
  if(isPlaying){
    song.pause();
    audioIcon.classList.remove('bi-music-note-beamed');
    audioIcon.classList.add('bi-pause-circle');
  }else{
    song.play();
    audioIcon.classList.add('bi-music-note-beamed');
    audioIcon.classList.remove('bi-pause-circle');
  }


  isPlaying = !isPlaying;
}

disableScroll();



window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Kehadiran Anda Merupakan Suatu Kehormatan Bagi Kami");
      })
    });
  });





  const urlParams = new URLSearchParams(window.location.search);
  const nama = urlParams.get('to') || '';
  const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/I';
 

 const namaContainer = document.querySelector('#hero h4 span');
 namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');



 document.querySelector('#nama').value = nama;
