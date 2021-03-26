const getRandomArray = function (array) {
  const randomArray = [];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tempValue = array[j];
    array[j] = array[i];
    array[i] = tempValue;
  }

  for (let i = 0; i < array.length; i++) {
    randomArray[i] = array[i];
  }
  return randomArray;
}

const showDownloadError = function() {
  const mistakeBlock = document.createElement('div');
  const closeButton = document.createElement('span');
  mistakeBlock.style.width = '100%';
  mistakeBlock.style.height = '20px';
  mistakeBlock.style.position = 'absolute';
  mistakeBlock.style.top = 0;
  mistakeBlock.style.left = 0;
  mistakeBlock.style.backgroundColor = 'yellow';
  mistakeBlock.style.textAlign = 'center'
  mistakeBlock.textContent = 'Не удалось загрузить данные о размещенных объявлениях на карте, пожалуйста, попробуйте позже'
  closeButton.style.width = '20px'
  closeButton.style.height = '20px'
  closeButton.style.backgroundImage = 'url(img/cross.svg)'
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px';
  closeButton.style.right = 0;
  closeButton.style.cursor = 'pointer'
  mistakeBlock.append(closeButton);
  document.body.append(mistakeBlock);

  setTimeout(function() {
    if(document.body.contains(mistakeBlock)) {
      mistakeBlock.remove();
    }
  }, 5000)

  closeButton.addEventListener('click', function() {
    mistakeBlock.remove();
  })
}

export {getRandomArray, showDownloadError};
