var cards = [{
        rank: 'queen',
        suite: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suite: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suite: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suite: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    },
];
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
    var currentCardRank = currentCard.rank
    var currentCardImage = currentCard.cardImage
    var currentSuite = currentCard.suite

    cardsInPlay.push(currentCardRank)

    console.log("User flipped " + currentCardRank);
    console.log("Rank " + currentCardRank);
    console.log("Image " + currentCardImage);
    console.log("Suite " + currentSuite);
    // console.log("cardsInPlay: " + cardsInPlay)

    checkForMatch();
}

flipCard(0);
flipCard(2);