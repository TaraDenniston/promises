// Part 1: Number Facts
let baseUrl = 'http://numbersapi.com';


// 1.
let favNum = 19;

axios.get(`${baseUrl}/${favNum}?json`)
  .then(response => {console.log(response.data);})
  .catch(error => console.log(error));


// 2.
let numList = [7,11,13,17];

axios.get(`${baseUrl}/${numList}?json`)
  .then(response => {
    $('body').append('<p>2.)</p><ul id="two"></ul>')
    for (let item of numList) {
      $('#two').append(`<li>${response.data[item]}</li>`);
    }
  })
  .catch(error => console.log(error));


// 3.
let promises = Array.from({ length: 4 }, () => {
    return axios.get(`${baseUrl}/${favNum}?json`);
  });

Promise.all(promises)
  .then(responseArr => {
    $('body').append('<p>3.)</p><ul id="three"></ul>')
    responseArr.forEach(r => $('#three').append(`<li>${r.data.text}</li>`))
  })
  .catch(error => console.log(error));