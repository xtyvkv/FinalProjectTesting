namespace FinalProjectTesting
{
    public class Player //do we need to make like a public Player[] somewhere? where to declare?
    {
        public int ID { get; set; }
        public int points { get; set; }
       // public bool wonRound { get; set; }
       public GifCard[] hand { get; set; }
    }
  

    public class Game
    {
        public int gameID { get; set; }
        public Player[] players { get; set; }
        public Round[] rounds { get; set; }
        public PromptCard[] promptDeck { get; set; }
        public string gameStatus { get; set; }
      
    }
    public class Round
    {
        public int roundID { get; set; }
        public Player judge { get; set; }
        public Player[] players { get; set; }
        public PromptCard promptCard { get; set; }
        public Dictionary<GifCard[], Player[]> playerPlays { get; set; }
        public Dictionary<Player, GifCard> winningCardAndPlayer { get; set; }

    }
}
