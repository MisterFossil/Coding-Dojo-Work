using System;

namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Deck deck = new Deck();
            // deck.showCards();
            Card topCard = deck.deal();
            Console.WriteLine($"Top Card: Suit - {topCard.suit}, StrVal - {topCard.stringVal}, Val - {topCard.val}");
            // deck.showCards();
            deck.reset();
            // deck.showCards();
            // deck.shuffle();
            // deck.showCards();
            Player player = new Player("Jon");
            for (int i = 0; i < 5; i++) {
                player.draw(ref deck);

            }
            player.CardsInHand();
            player.discard(2);
            player.CardsInHand();
            // deck.showCards();
        }
    }
}
