const sounds = window.addEventListener('keydown',(event) => {
    
    const keyCode = event.code;    
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    
    if(!audio) return;
    
    key.classList.add('playing');
    
    audio.currentTime = 0;
    audio.play();    
});


const remove = window.addEventListener('keyup', (event) => {
    const key = document.querySelector(`.key[data-key="${event.code}"]`);
    key.classList.remove('playing');
});
