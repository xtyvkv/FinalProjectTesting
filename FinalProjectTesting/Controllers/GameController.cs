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
            foreach(var currPrompt in promptDB)
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
    }
}
