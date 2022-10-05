using Microsoft.AspNetCore.Mvc;
using FinalProjectTesting;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;

namespace FinalProjectTesting.Controllers
{


    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        private CardGameContext _cardGameContext;
        private readonly ILogger<GameController> _logger;
        public PromptCard[] promptDB;
        public Player[] playersDB;
        public GameController(ILogger<GameController> logger, CardGameContext cardGameContext)
        {
            _logger = logger;
            _cardGameContext = cardGameContext;
        }

        [Route("AllPrompts")]
        [HttpGet]
        public PromptCard[] AllPrompts()
        {
            promptDB = _cardGameContext.PromptCard.ToArray();
            return promptDB;
        }
        [Route("SeeSpecificPrompt")]
        [HttpGet]
        public PromptCard SeeSpecificPrompt(int ID)
        {
            promptDB = _cardGameContext.PromptCard.ToArray();
            var promptToShow = new PromptCard();
            foreach (var currPrompt in promptDB)
            {
                if (currPrompt.ID == ID)
                {
                    promptToShow = currPrompt;
                }
            }
            return promptToShow;
        }
        [Route("Get3RandomPrompts")]
        [HttpGet]
        public PromptCard[] Get3RandomPrompts()
        {
            var promptList = new List<PromptCard>();
            promptDB = _cardGameContext.PromptCard.ToArray();
            Random rand = new Random();
            int randValOne = rand.Next(promptDB.Length);
            int randValTwo = rand.Next(promptDB.Length);
            int randValThree = rand.Next(promptDB.Length);
            foreach (var prompt in promptDB)
            {
                if (prompt.ID == randValOne || prompt.ID == randValTwo || prompt.ID == randValThree)
                {
                    PromptCard promptCard = prompt;
                    promptList.Add(promptCard);
                }
            }
            return promptList.ToArray();
        }
        [Route("getPlayers")]
        [HttpGet]
        public Player[] getPlayers()
        {
            playersDB = _cardGameContext.Player.ToArray();
            return playersDB;
        }

        [Route("createPlayer")]
        [HttpPost]
        public void createPlayer([FromBody] createPlayerParameters parameters)
        {
            Player newPlayer = new Player();
            newPlayer.name = parameters.newPlayerName;
            newPlayer.mixesMatched = 0;
            _cardGameContext.Player.Add(newPlayer);
            _cardGameContext.SaveChanges();

            //copied from assessment6 using mvc? not sure if this is right must review later
        }

        [Route("deletePlayer")]
        [HttpPost]
        public void deletePlayer([FromBody] createPlayerParameters parameters)
        {
            Player playerToDelete = new Player();
            foreach (var player in _cardGameContext.Player.ToArray())
            {
                if (player.name == parameters.newPlayerName)
                {
                    _cardGameContext.Player.Remove(player);
                    _cardGameContext.SaveChanges();
                    break;
                }
            }
        }
        [Route("ModifyAPlayer")]
        [HttpPost]
        public void modifyPlayers([FromBody] modifyPlayerParameters theNewPlayer)
        {
            Player thisPlayer = _cardGameContext.Player.Where(p => p.ID == theNewPlayer.id).FirstOrDefault();
            if (thisPlayer != null)
            {
                if (thisPlayer.name != theNewPlayer.name)
                {
                    thisPlayer.name = theNewPlayer.name;
                    _cardGameContext.Update(thisPlayer);
                    _cardGameContext.SaveChanges();
                }
            }
        }
        //[Route("ModifyPlayers")]
        //[HttpPost]
        //public void modifyPlayers([FromBody] modifyPlayerParameters listOfPlayers)
        //{
        //    List<Player> newPlayers = listOfPlayers.newPlayerNames;
        //    foreach (var item in _cardGameContext.Player.ToArray())
        //    {
        //        if (item.ID == newPlayers.ElementAt<Player>(item.ID).ID)
        //        {
        //            if (item.name != newPlayers.ElementAt<Player>(item.ID).name)
        //            {
        //                _cardGameContext.Update(item.name, newPlayers.ElementAt<Player>(item.ID).name);
        //                _cardGameContext.SaveChanges();
        //            }
        //        }
        //    }
        //}

    }
}
