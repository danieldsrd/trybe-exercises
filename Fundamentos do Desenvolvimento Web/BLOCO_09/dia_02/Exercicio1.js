const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(r=> r.json())
  .then(data => {
    document.querySelector('h2').innerText = data.joke;
  });
};

window.onload = () => fetchJoke();