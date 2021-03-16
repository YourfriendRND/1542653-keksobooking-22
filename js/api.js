const getData = function (url, onSuccess) {
  return fetch(url,
    {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error ('Не удалось получить список объявлений. Попробуйте выполнить запрос позже')
    }).then(function(json) {
      onSuccess(json)
    })
}

export {getData};
