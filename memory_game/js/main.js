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
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }
    }
}

function flipCard(image) {
    var cardId = image.getAttribute('data-id');

    var currentCard = cards[cardId];
    var currentCardRank = currentCard.rank;
    var currentCardImage = currentCard.cardImage;

    image.setAttribute('src', currentCardImage);

    cardsInPlay.push(currentCardRank)

    console.log("User flipped " + currentCardRank);
    checkForMatch();
}

function createBoard() {
    var gameBoard = document.getElementById('game-board');

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i]
        var image = document.createElement('img');

        image.setAttribute('src', 'images/back.png');
        image.setAttribute('data-id', i);
        gameBoard.appendChild(image);

        image.addEventListener('click', function() {
            flipCard(this);
        });
    }
}

createBoard();