using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    class Deck {
        // Give the Deck class a property called "cards" which is a list of Card Objects
        public List<Card> cards = new List<Card>();

        // When initializing the deck, make sure that it has a list of 52 unique cards as its "cards" property
        public Deck(){
            Init();
        }

        // An initialize method to populate a deck full of 52 cards
        public void Init() {
            string suit = "";
            string sVal = "";
            int intVal = 0;
            for (int i = 1; i <= 4; i++){
                // The ouside of the loop is the "suits" AKA i is the "suit"
                for (int j = 1; j <= 13; j++) {
                    // The inside loop is to set suits with i, and then a few if statments to make string val, and val is easy
                    intVal = j;
                    if(i == 1) {
                        suit = "hearts";
                    } else if (i == 2) {
                        suit = "spades";
                    } else if (i == 3) {
                        suit = "diamonds";
                    } else if (i == 4) {
                        suit = "clubs";
                    }

                    if (j == 1) {
                        sVal = "Ace";
                    } else if (j == 11) {
                        sVal = "Jack";
                    } else if (j == 12) {
                        sVal = "Queen";
                    } else if (j == 13) {
                        sVal = "King";
                    } else {
                        sVal = j.ToString();
                    }
                    cards.Add(new Card(sVal,suit,intVal));
                }
            }
        }

        // A checker method to make sure that the deck populated properly
        public void showCards(){
            foreach(Card card in cards){
                Console.WriteLine($"Suit: {card.suit}, Value: {card.stringVal}, IntValue: {card.val}");
            }
            Console.WriteLine($"Number of cards in the deck is {cards.Count}.");
        }

        // Give the Deck a deal method that selects the top-most card and removes it from the list of cards, and returns the Card
        public Card deal(){
            Card topCard = new Card(cards[0].stringVal,cards[0].suit,cards[0].val);
            cards.RemoveAt(0);
            return topCard;
        }

        // Give the Deck a reset method that resets the cards property to contain the original 52 cards
        public void reset(){
            // without the clear method, the deck will just be happy to add more cards to the list
            cards.Clear();
            Init();
        }

        // Give the Deck a shuffle method that randonly reorders the deck's cards
        public void shuffle() {
            Random rand = new Random();
            for(int i = 0; i < cards.Count; i++) {
                int shuff = rand.Next(0,cards.Count);
                Card tmp = cards[i];
                cards[i] = cards[shuff];
                cards[shuff] = tmp;
            }
        }
    }

}