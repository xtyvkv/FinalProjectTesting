import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }
  private readonly promptUrl: string = "/game/SeeSpecificPrompt?ID=";
  public promptDeck: PromptCard[] | any = null;
  private readonly deckUrl: string = "game/AllPrompts";
  public newGame: Game | any = null;
  public newRound: Round | any = null;
  
  public playDeckOne: GifCard[] | any = null;
  public playDeckTwo: GifCard[] | any = null;
  public playDeckThree: GifCard[] | any = null;
  public playerOne: Player | any = null;
  public playerTwo: Player | any = null;
  public playerThree: Player | any = null;
  public players: Player[] = [this.playerOne, this.playerTwo, this.playerThree];

  async SeeSpecificPrompt(id: number): Promise<PromptCard> {
    let thisPrompt: PromptCard | any = null;
    try {
      let promptString: string = this.promptUrl;
      promptString = promptString + id;
      thisPrompt = await this.httpClient.get<PromptCard>(promptString).toPromise();
      console.log('Prompt # ' + id + 'were successfully retrieved')
    }
    catch (unexpectedException) {
      thisPrompt = [];
      if (unexpectedException instanceof HttpErrorResponse) {
        let unexpectedExceptionHttp: HttpErrorResponse = unexpectedException;
        console.log('Cannot get prompt with ID ' + id + ':' + unexpectedExceptionHttp.message);
      }
    }
    return thisPrompt;
  }
  public async createPromptDeck(): Promise<PromptCard[]> {
   
    try {
      let getDeckString: string = this.deckUrl;
      this.promptDeck =  await this.httpClient.get<PromptCard[]>(getDeckString).toPromise();
      console.log('Deck made')
    }
    catch (unexpectedException) {
      this.promptDeck = [];
    }

    return this.promptDeck;
  }

  public async startRound(): Promise<Round> {

    let localThis: GameService = this;
    localThis.newRound = new Round();
    localThis.newRound.roundID = 1;
    localThis.newRound.players = localThis.getPlayers();
    localThis.newRound.promptCard = await localThis.SeeSpecificPrompt(2);
    localThis.newRound.plays = [];
    localThis.newRound.winningCard = [];
    console.log(localThis.newRound);
    return localThis.newRound;
  }
  public async getPlayers(): Promise<Player[]> {
    let localThis: GameService = this;    
    localThis.playDeckOne = await localThis.httpClient.get<GifCard[]>('https://api.giphy.com/v1/gifs/search?api_key=krIIgdHCVeZ4XkrILHcljt661U7hJ9kK&q=reaction&limit=5&offset=0&rating=g&lang=en').toPromise();
    localThis.playDeckTwo = await localThis.httpClient.get<GifCard[]>('https://api.giphy.com/v1/gifs/search?api_key=krIIgdHCVeZ4XkrILHcljt661U7hJ9kK&q=reaction&limit=5&offset=0&rating=g&lang=en').toPromise();
    localThis.playDeckThree = await localThis.httpClient.get<GifCard[]>('https://api.giphy.com/v1/gifs/search?api_key=krIIgdHCVeZ4XkrILHcljt661U7hJ9kK&q=reaction&limit=5&offset=0&rating=g&lang=en').toPromise();
    localThis.players[0].hand = localThis.playDeckOne;
    localThis.players[1].hand = localThis.playDeckTwo;
    localThis.players[2].hand = localThis.playDeckThree;
    localThis.players[0].ID = 1;
    localThis.players[1].ID = 2;
    localThis.players[2].ID = 3;
    localThis.players[0].points = 0;
    localThis.players[1].points = 0;
    localThis.players[2].points = 0;
    return localThis.players
  }
  //public removeCard(cardToRemove: number, player: Player): void {
  //  let playerID: number = 0;
  //  for (var i = 0; i < this.players.length; i++) {
  //    if (this.players[i].ID == player.ID) {
  //      playerID = player.ID
  //    }
  //  }
  //  for (var i = 0; i < this.players[playerID].hand.length; i++) {
  //    if (this.players[playerID].hand[i+1] == cardToRemove) {
  //      this.players.splice(i, 1);
  //      break;
  //    }
  //  }
  //  window.alert('Card removed');
  //}

  public async startGame(): Promise<Game> {
    let localThis: GameService = this;
    localThis.newGame = new Game();
    localThis.newGame.gameStatus = "new";
    localThis.newGame.gameID = 1;
    localThis.promptDeck = await localThis.createPromptDeck();
    localThis.newGame.promptDeck = localThis.promptDeck;
    localThis.newGame.rounds = [];
    localThis.newGame.players = [];
    console.log('game made');
    return localThis.newGame;
  }
  getRandomGifs() {
    return this.httpClient.get('https://api.giphy.com/v1/gifs/search?api_key=krIIgdHCVeZ4XkrILHcljt661U7hJ9kK&q=reaction&limit=5&offset=0&rating=g&lang=en');
  }

  getChosenGif() {
    return this.httpClient.get('https://api.giphy.com/v1/gifs/search?api_key=krIIgdHCVeZ4XkrILHcljt661U7hJ9kK&q=shock&limit=1&offset=0&rating=g&lang=en');
  }

}
export class Game {
  public gameID: number = 0;
  public players: Player[] = [];
  public rounds: Round[] = [];
  public promptDeck: PromptCard[] = [];
  public gameStatus: string = "";
  
}
export class Player {
  public ID: number = 0;
  public points: number = 0;
  public hand: GifCard[] = [];

}
export class Round {
  public roundID: number = 0;
 /* public judge: Player | any = null;*/
  public players: Player[] = [];
  public promptCard: PromptCard | any = null;
  public plays: GifCard[] = [];
  public winningCard: GifCard | any = null;
}
export class GifCard {
  public ID: number = 0;
  public category: string = "";
  public gif: string = "";
}
export class PromptCard {
  public ID: number = 0;
  public promptSentence: string = "";
}
