// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './guideme';


// gold coordinates
const WIDTH = 300;
const HEIGH = 410;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20 ) {
    alert(`Found the treasure in ${clicks} clicks!`);
    location.reload();
  }
});