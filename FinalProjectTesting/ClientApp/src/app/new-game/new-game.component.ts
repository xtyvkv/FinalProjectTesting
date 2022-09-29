import { Component, OnInit } from '@angular/core';
import { GameService, Game, Round, Player, GifCard, PromptCard } from '../game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  constructor(private newGameService: GameService) { }
  public newGame: Game | any = null;
  public newRound: Round | any = null;
  public hand: GifCard[] | any = null;
  public players: Player[] | any = null;

  async ngOnInit(): Promise<void> {
    let thisComponent: NewGameComponent = this;
   // thisComponent.newGame = await thisComponent.newGameService.startGame();
    thisComponent.newRound = await thisComponent.newGameService.startRound();
    thisComponent.hand = await thisComponent.newGameService.getGifDeck();
    thisComponent.players = await thisComponent.newGameService.getPlayers();
  }
  public async getPlayAndRoundNum(): Promise<void> {
    let roundNum: number = 0;
    let playNum: number = 0;
  }
  public async getPlayerNames(): Promise<void> {
    //type the names user input bleh
  }
  //rounds will display playNum times
}
