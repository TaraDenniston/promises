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
    for (let item of numList) {
      console.log(response.data[item])
    }
    return response.data
  })
  .catch(error => console.log(error));


