const getRandomValue = function (minValue, maxValue) {
  if (minValue >= 0 && maxValue > minValue) {
    let randomNumber = Math.round(Math.random() * (maxValue - minValue) + minValue);
    return randomNumber;
  }
  return 'Нужно ввести корректные значения minValue и maxValue';
}

const getRandomCoordinate = function (minValue, maxValue, dots) {
  if (minValue >= 0 && maxValue > minValue) {
    let ramdomCoordinate = (Math.random() * (maxValue - minValue) + minValue).toFixed(dots);
    return ramdomCoordinate;
  }
  return 'Нужно ввести корректные значения minValue и maxValue';
}

getRandomCoordinate(3,5,2);
getRandomValue(3, 6);

// Источник идеи: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
