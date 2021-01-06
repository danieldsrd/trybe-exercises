const fetch = require("node-fetch");

function fetchURL () {
  return fetch('https://dog.ceo/dog-api/').then(data => 
    data 
    .json()
    .then(json => 
      data.ok ? Promise.resolve(json) : Promise.reject(json)
    )
  );
}

module.exports = { fetchURL } ;