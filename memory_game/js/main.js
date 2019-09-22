var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) {
    var currentCard = cards[cardId]
    cardsInPlay.push(currentCard)

    console.log("User flipped " + currentCard);
    // console.log("cardsInPlay: " + cardsInPlay)

    checkForMatch();
}

flipCard(0);
flipCard(2);