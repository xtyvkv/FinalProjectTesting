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
        public GameController(ILogger<GameController> logger, CardGameContext cardGameContext)
        {
            _logger = logger;
            _cardGameContext = cardGameContext;
        }
        
        [Route("Test")]
        [HttpGet]
        public PromptCard[] Test()
        {
            var PromptCard = _cardGameContext.PromptCard.ToArray();
            return PromptCard;
        }


    }
}
