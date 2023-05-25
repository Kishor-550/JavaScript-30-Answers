const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);

setDate();

