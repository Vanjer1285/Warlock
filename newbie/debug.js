var cards = ["a","b","c","d","e"];

var card1 = {
    legal : false,
    money : 100,
    steps : 3
};

var card2 = {
    legal : true,
    money : 50,
    steps : 1
};


cards = [card1, card2, card2, card1];
var deck = [];
var popRandomFromArray = function (array) {
    return array.splice(Math.floor(Math.random() * array.length), 1)[0];
};
var shuffle = function (cards) {
    var deck = [];
    while (cards !== 0) {
        deck.push(popRandomFromArray(cards));
    }
    return deck;
};
deck = shuffle(cards);
var firstHand =




    cards[0];

alert(cards);

cards = [
    {
        money : 100,
        steps : 3
    },
    {
        money : 50,
        steps : 1
    },
    {}
];

alert(cards);



var randomCard = [];
while (cards.length !== 0) {
    var number = Math.floor(Math.random()*cards.length);
    randomCard.push(cards.splice(number, 1)[0]);
}
alert(randomCard);