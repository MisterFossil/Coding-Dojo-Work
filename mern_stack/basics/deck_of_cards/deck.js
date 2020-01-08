const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

class Deck{
    deck = [];
    // fill the deck with all 52 cards
    constructor(){
        for(let i = 0; i < suits.length; i++)
        {
            for (let j = 0; j < values.length; j++)
            {
                const card = new Card(suits[i],values[j]);
                deck.push(card);
            }
        }
    }
    // reset the deck to all 52 cards
    reset(){
        deck = new Deck();
    }
    // randomize the order of the cards in the deck
    shuffle(){}
    // remove and return a card
    deal(){}
}