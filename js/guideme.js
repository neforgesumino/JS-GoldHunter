
// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two location points
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return a String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 30) {
    return "Очень близко!";
  } else if (distance < 40) {
    return "Близко";
  } else if (distance < 60) {
    return "Уже рядом";
  } else if (distance < 100) {
    return "Где-то тут";
  } else if (distance < 180) {
    return "Холодно";
  } else if (distance < 360) {
    return "Тут ничего нет";
  } else {
    return "Совсем ничего!";
  }
}