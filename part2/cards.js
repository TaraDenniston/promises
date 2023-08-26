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
  .catch(error => console.log(error));


// 3.
let deckId = '';
let $btn = $('button');
let $pile = $('#pile');

axios.get(`${baseUrl}/new/shuffle`)
  .then(response => deckId = response.data.deck_id)
  .catch(error => console.log(error));

$btn.on('click', () => {
  axios.get(`${baseUrl}/${deckId}/draw`)
    .then(response => {
      $pile.empty();
      $pile.append(`<img src="${response.data.cards[0].image}" alt="">`);
      if (response.data.remaining === 0) {
        $btn.hide();
        $('#deck').append(`<img src="https://placehold.co/226x316/white/white" alt="">`)
      };
    })
    .catch(error => console.log(error));
});



