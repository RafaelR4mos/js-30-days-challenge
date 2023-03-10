const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelector('.hand');

function setDate() {

   const now = new Date();
   const seconds = now.getSeconds();
   const minutes = now.getMinutes();
   const hours = now.getHours();

   if(seconds == 0) {
    hands.classList.add('animation-stopper')
   }
   else {
    hands.classList.remove('animation-stopper')
   }

   const secondDegrees = ((seconds / 60) * 360) + 90;
   const minuteDegrees = ((minutes / 60) * 360) + 90;
   const hoursDegrees = ((hours / 12) * 360) + 90;

   secondHand.style.transform = `rotate(${secondDegrees}deg)`;
   minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
   hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

   console.log(seconds);
}

setInterval(setDate, 1000);