// Part 2: Deck of Cards
const baseUrl = 'https://deckofcardsapi.com/api/deck';


// 1.
axios.get(`${baseUrl}/new/draw`)
  .then(response => {
    let { suit, value } = response.data.cards[0];
    console.log(`${value} of ${suit}`)
  })
  .catch(error => console.log(error));


// 2.
let cards = []
axios.get(`${baseUrl}/new/draw`)
  .then(response => {
    cards.push(response.data.cards[0])
    return axios.get(`${baseUrl}/${response.data.deck_id}/draw`)
  })
  .then(response => {
    cards.push(response.data.cards[0])
    cards.forEach(card => {
        console.log(`${card.value} of ${card.suit}`)
    })
  })





