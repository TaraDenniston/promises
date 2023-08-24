// Part 1: Number Facts

// 1.
let favNum = 19;

$.getJSON(`http://numbersapi.com/${favNum}?json`, response => {
    console.log(response)
})
