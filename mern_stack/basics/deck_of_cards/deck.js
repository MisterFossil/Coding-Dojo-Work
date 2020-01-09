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
                let valImg = "";
                if (typeof values[j] === String ){
                    valImg = values[j][0];
                    console.log("true");
                } else if (values[j] instanceof Number){
                    valImg = values[j].toString();
                    console.log("true");
                }
                const card1 = new Card(suits[i],values[j],`${valImg}${suits[i][0]}.png`);
                console.log(card1);
                this.deck.push(card1);
            }
        }
    }
    // reset the deck to all 52 cards
    reset(){
        this.deck = new Deck();
    }
    // randomize the order of the cards in the deck
    shuffle(){
        console.log("shuffle");
    }
    // remove and return a card
    deal(){
        return this.deck.splice(0,1);
    }
}