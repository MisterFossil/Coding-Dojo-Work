using System;

namespace DeckOfCards
{
    class Card {
        // Give the Card class a property "stringVal" which will hold the value of the card eg(Ace, 2,3,4,5,6,7,8,9,10,Jack,Queen,King)
        public string stringVal;
        // Give the Card a property "suit" which will hold the suit of the card (clubs,spades,hearts,diamonds)
        public string suit;
        // Give the card a property "val" which will hold the numerical value of the card 1-13 as integers
        public int val;

        // I'm making a constructor that will hopefully facilitate the creation of cards
        public Card(string sV, string s, int v) {
            stringVal = sV;
            suit = s;
            val = v;
        }

        // public Card() {

        // }
        
    }
}