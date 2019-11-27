using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    class Player {
        // Give the player a name property
        public string Name;

        // Give the player a hand property that is a list of type card
        public List<Card> hand = new List<Card>();

        // Player Constructor
        public Player(string name) {
            Name = name;
        }

        // Give the player a draw method of which draws a card from the deck adds it to the player's hand and returns the card.
            // note this method will require reference to a deck object
        public Card draw(ref Deck refDeck){
            Card drawCard = refDeck.deal();
            hand.Add(drawCard);
            return drawCard;
        }

        // Give the Player a discard method which discards the Card at the specified index from the player's hand
        // and returns this Card or null if the index does not exist
        public Card discard(int i) {
            if (i > hand.Count -1) {
                return null;
            } else {
                Card discardCard = hand[i];
                hand.RemoveAt(i);
                return discardCard;
            }
        }

        public void CardsInHand(){
            foreach(Card card in hand) {
                Console.WriteLine($"Card in Hand: Suit - {card.suit}, Val - {card.val}, StrVal - {card.stringVal}");
            }
        }

    }



}