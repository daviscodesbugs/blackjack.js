var routes = [
    {
        method: 'GET',
        path: '/ping',
        handler: function (request, reply) {
            console.log('pong');
            reply('pong');
        }
    }, {
        method: 'GET',
        path: '/newdeck',
        handler: function (request, reply) {
            newDeck();
            reply('made new deck');
            console.log('made new deck');
        }
    }, {
        method: 'GET',
        path: '/deckcount',
        handler: function (request, reply) {
            reply(getDeckCount());
            console.log(getDeckCount());
        }
    }, {
        method: 'GET',
        path: '/drawfromdeck',
        handler: function (request, reply) {
            var drawn = drawFromDeck();
            if (drawn) {
                reply(drawn);
                console.log(drawn);
            } else {
                reply('deck is empty');
                console.log('deck is empty');
            }
        }
    }, {
        method: 'GET',
        path: '/newshoe',
        handler: function (request, reply) {
            newShoe();
            reply('made new shoe');
            console.log('made new shoe');
        }
    }, {
        method: 'GET',
        path: '/shoecount',
        handler: function (request, reply) {
            var count = getShoeCount();
            reply(count);
            console.log(count);
        }
    }, {
        method: 'GET',
        path: '/drawfromshoe',
        handler: function (request, reply) {
            var drawn = drawFromShoe();
            if (drawn) {
                reply(drawn);
                console.log(drawn);
            } else {
                reply('deck is empty');
                console.log('deck is empty');
            }
        }
    }
]

var currentdeck = [];
var currentshoe = [];

var newDeck = function () {
    currentdeck = [];
    suits = ["S", "D", "H", "C"];
    values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    suits.forEach(function (suit) {
        values.forEach(function (val) {
            currentdeck.push({
                "value": val,
                "suit": suit
            });
        });
    });
}

var getDeckCount = function () {
    return currentdeck.length;
}

var drawFromDeck = function () {
    var index = Math.floor(Math.random() * currentdeck.length);
    var card = currentdeck[index];
    if (index > -1) {
        currentdeck.splice(index, 1);
    }
    return card;
}

var newShoe = function () {
    currentshoe = [];
    suits = ["S", "D", "H", "C"];
    values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (var d = 0; d < 6; d++) {
        suits.forEach(function (suit) {
            values.forEach(function (val) {
                currentshoe.push({
                    "value": val,
                    "suit": suit
                });
            });
        });
    }
}

var getShoeCount = function () {
    return currentshoe.length;
}

var drawFromShoe = function () {
    var index = Math.floor(Math.random() * currentshoe.length);
    var card = currentshoe[index];
    if (index > -1) {
        currentshoe.splice(index, 1);
    }
    return card;
}

module.exports = routes;