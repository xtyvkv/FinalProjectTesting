namespace FinalProjectTesting
{
    public class Player //do we need to make like a public Player[] somewhere? where to declare?
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int LifeTimePoints { get; set; }
        public static void drawCard()
        {
            //access db for cards to draw and add to player hand
        }

    }
    //public class GifCard
    //{
    //    public int ID { get; set; }
    //    public string category { get; set; }
    //    public string gif { get; set; }
    //}
    //public class PromptCard
    //{
    //    public int ID { get; set; }
    //    public string promptSentence { get; set; }
    //}

    public class Game
    {
        public int gameID { get; set; }
        public Player[] players { get; set; }
        public Round[] rounds { get; set; }
        public PromptCard[] promptDeck { get; set; }
        public string gameStatus { get; set; }
        public Dictionary<Player, GifCard[]> playerHand { get; set; }
        public Dictionary<int, Player> Points { get; set; }
    }
    public class Round
    {
        public int roundID { get; set; }
        public Player judge { get; set; }
        public Player[] players { get; set; }
        public PromptCard promptCard { get; set; }
        public Dictionary<GifCard[], Player[]> playerPlays { get; set; }
        public Dictionary<Player, GifCard> WinningCardAndPlayer { get; set; }

    }
}
