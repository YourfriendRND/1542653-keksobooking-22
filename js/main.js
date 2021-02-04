const getRandomValue = function (minValue, maxValue) {
  if (minValue >= 0 && maxValue > minValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
  }
  throw new Error (-1);
}

const getRandomCoordinate = function (minValue, maxValue, dots) {
  let fixedMinNumber = minValue.toFixed(dots);
  let fixedMaxNumber = maxValue.toFixed(dots);
  if (fixedMinNumber >= 0 && fixedMaxNumber > fixedMinNumber) {
    return (Math.random()* (fixedMaxNumber - fixedMinNumber) + minValue).toFixed(dots);
  }
  throw new Error (-1);
}

getRandomCoordinate(1.1, 1.2, 1);
getRandomValue(3, 6);
