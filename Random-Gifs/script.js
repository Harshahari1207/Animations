
const img = document.querySelector('img');
const input = document.querySelector('#itemName');
const btn = document.querySelector('#click');

btn.addEventListener("click", () => {
    console.log(input.value);
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=VzDOOs6DKkySenS7XF1bCHSMZFDakE7a&s='+input.value, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
})
  