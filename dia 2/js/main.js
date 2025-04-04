
const secondsHand = document.querySelector(".hand-second")
const minHand = document.querySelector('.hand-min')
const hourHand = document.querySelector('.hand-hour')

const setDate = () => {
    const now = new Date();
   
    const seconds = now.getSeconds();
    const min = now.getMinutes()
    const hour = now.getHours()

    console.log(hour)
    
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minDegrees = ((min / 60) * 360) + 90;
    const hourDegrees = ((hour / 24) * 360) + 90;
    
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
    minHand.style.transform = `rotate(${minDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    
}

setInterval(setDate, 1000);