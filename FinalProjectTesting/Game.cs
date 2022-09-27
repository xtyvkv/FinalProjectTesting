namespace FinalProjectTesting
{
    
  

    public class Game
    {
        public int gameID { get; set; }
        public Player[] players { get; set; }
        //public Round[] rounds { get; set; }
        public Round[] rounds { get; set; }
        public PromptCard[] promptDeck { get; set; }
        public string gameStatus { get; set; }
      
    }
    public class Round
    {
        public int roundID { get; set; }
        //public Player judge { get; set; }
        public Player player { get; set; }
        public PromptCard[] promptCards { get; set; }
        public GifCard[] hand { get; set; }
        //public Dictionary<GifCard[], Player[]> playerPlays { get; set; }
        //public Dictionary<Player, GifCard> winningCardAndPlayer { get; set; }

    }
    public class GifyResponse
    {
        public GifCard[] data { get; set; }
        public GifyPaginationResponse pagination { get; set; }
        public GifyMetaResponse meta { get; set; }
    }
    public class GifyPaginationResponse
    {
        public int total_count { get; set; }
        public int count { get; set; }
        public int offest {  get; set; }
    }
    public class GifyMetaResponse
    {
        public int status { get; set; }
        public string msg { get; set; }
        public string response_id { get; set; }
    }
    public class GifCard
    {
        public string type { get; set; }
        public string id { get; set; }
        public string url { get; set; }
        public string slug { get; set; }
        public string bitly_gif_url { get; set; }
        public string bitly_url { get; set; }
        public string embed_url { get; set; }
        public string username { get; set; }
        public string source { get; set; }
        public string title { get; set; }
        public GifImage images { get; set; }
    }
    public class GifImage
    {
        public imageInfo original { get; set; }
        public imageInfo downsized { get; set; }
    }
    public class imageInfo
    {
        public string height { get; set; }
        public string width { get; set; }
        public string size { get; set; }
        public string url { get; set;  }
    }
}
