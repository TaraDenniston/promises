// Part 2: Deck of Cards
const baseUrl = 'https://deckofcardsapi.com/api/deck';


// 1.
axios.get(`${baseUrl}/new/draw`)
  .then(response => {
    let { suit, value } = response.data.cards[0];
    console.log(`${value} of ${suit}`)
  })
  .catch(error => console.log(error));


