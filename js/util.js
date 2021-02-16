// Utility functions
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
    return (Math.random() * (fixedMaxNumber - fixedMinNumber) + minValue).toFixed(dots);
  }
  throw new Error (-1);
}

const getRandomElementOfArray = function (array) {
  return array[getRandomValue(0, array.length - 1)];
}

const getRandomArray = function (array) {
  const randomArray = [];
  const k = getRandomValue(1, array.length);
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tempValue = array[j];
    array[j] = array[i];
    array[i] = tempValue;
  }

  for (let i = 0; i < k; i++) {
    randomArray[i] = array[i];
  }

  return randomArray;
}

export {getRandomValue, getRandomCoordinate, getRandomElementOfArray, getRandomArray};
