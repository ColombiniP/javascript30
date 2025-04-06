const inputSec = document.querySelector(".input-sec");
const inputMiliSec = document.querySelector(".input-miliSec");
const inputMin = document.querySelector(".input-min");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const reloadBtn = document.querySelector(".reload");
const timerBtn = document.querySelector(".timerBtn");

let isPaused = false;
let interval;
let min = 0;
let sec = 0;
let miliSec = 0;

playBtn.addEventListener("click", eventPlay);
pauseBtn.addEventListener("click", eventPause);
stopBtn.addEventListener("click", eventStop);
reloadBtn.addEventListener("click", evenReload);

function eventPlay() {

  interval = setInterval(()=>{

    if (!isPaused) {
        inputMiliSec.value++

        if (inputMiliSec.value == 100) {

            inputMiliSec.value = miliSec
            inputSec.value++

            if (inputSec.value == 60) {
                
                inputSec.value = sec
                inputMin.value++
            }
        }
    }
  },10)
  
  pauseBtn.style.display = "block";
  playBtn.style.display = "none";
}

function eventPause() {
  isPaused = true;
  console.log(isPaused)
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
}

function eventStop() {
  clearInterval(interval);
  inputMin.value = `0${min}`;
  inputSec.value = `0${sec}`;
  inputMiliSec.value = `00${miliSec}`;
  // stopBtn.style.display = 'none'
  reloadBtn.style.display = "block";
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
}

function evenReload() {
  location.reload();
}
