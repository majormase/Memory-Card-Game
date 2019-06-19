alert('Up and Running');
cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
}, {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
}, {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
}, {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}];
var cardsInPlay = [];

function checkForMatch() {
    
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You have found a match!");
    } else 
    alert("Sorry,try again.")
}
function flipcard() {
    var cardID = this.getAtrribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    if(cardsInPlay.length === 2) {
      checkForMatch();
}
    alert("User flipped" + " " + cards[cardId].rank);
    alert(cards[cardId].cardImage);
    alert(cards[cardId].suit);
};

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('scr', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('gameBoard').appendChild(cardElement)
  }
};

createBoard();
