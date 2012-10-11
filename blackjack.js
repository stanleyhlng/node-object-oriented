var util = require('util');

function Card(suit, number) {
    var suit = suit;
    var number = number;

    this.getSuit = function() {
        return suit;
    };

    this.getNumber = function() {
        return number;
    };

    this.getValue = function() {
        if (number === 11 || number === 12 || number === 13) {
            return 10;
        } else if (number === 1) {
            return 13;
        } else {
            return number;
        }
    };
}


function Hand() {
    var cards = [];
    cards.push(deal());
    cards.push(deal());

    this.score = function() {
        var score = 0;
        for (var i = 0; i < cards.length; i++) {
            score += cards[i].getValue();
        }
        return score;
    };

    this.getHand = function() {
        return this.cards;
    };

    this.printHand = function() {
        for (var i = 0; i < cards.length; i++) {
            console.log(cards[i].getValue());
        }
    };

    this.hitMe = function() {
        cards.push(deal());
    };
}


var deal = function() {
    var suit = Math.floor(Math.random() * 4 + 1);
    var number = Math.floor(Math.random() * 13 + 1);
    return new Card(suit, number);
}


var hand = new Hand();
hand.printHand();
