import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }
  private readonly promptUrl: string = "/game/SeeSpecificPrompt?ID=";
  public promptDeck: PromptCard[] | any = null;
  /*private readonly deckUrl: string = "game/AllPrompts";*/
  private readonly deckUrl: string = "/game/Get3RandomPrompts";
  public newGame: Game | any = null;
  public newRound: Round | any = null;
  private readonly randomGifUrl: string = "https://api.giphy.com/v1/gifs/search?api_key=krIIgdHCVeZ4XkrILHcljt661U7hJ9kK&q=reaction&limit=5&offset=0&rating=g&lang=en";
  private readonly getPlayerUrl: string = "/game/getPlayers";
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
  //public async createPromptDeck(): Promise<PromptCard[]> {

  //  try {
  //    let getDeckString: string = this.deckUrl;
  //    this.promptDeck =  await this.httpClient.get<PromptCard[]>(getDeckString).toPromise();
  //    console.log('Deck made')
  //  }
  //  catch (unexpectedException) {
  //    this.promptDeck = [];
  //  }

  //  return this.promptDeck;
  //}

  async create3PromptDeck(): Promise<PromptCard[]> {
    let promptDeck: PromptCard[] | any = null;
    try {
      let getDeckString: string = this.deckUrl;
      promptDeck = await this.httpClient.get<PromptCard[]>(getDeckString).toPromise();
      console.log('Deck made')
    }
    catch (unexpectedException) {
      promptDeck = [];
    }
    return promptDeck;
  }

  async getPlayers(): Promise<Player[]> {
    let players: Player[] | any = null;
    try {
      let getPlayerString: string = this.getPlayerUrl;
      players = await this.httpClient.get<Player[]>(getPlayerString).toPromise();
      console.log('Players made');
    }
    catch (unexpectedException) {
      players = [];
    }
    return players;
  }

  async getName(name: string): Promise<void> {
    let playerName: string = name;
    console.log('name done');
  }

  async createPlayer(playerName: string): Promise<Player> {
    let newPlayer: Player | any = null;
    newPlayer.name = this.getName(playerName);
    newPlayer.mixesMatched = 0;
    this.players.push(newPlayer);
    console.log('player added');
    return newPlayer;
  }

  public async startRound(): Promise<Round> {

    let localThis: GameService = this;
    localThis.newRound = new Round();
    localThis.newRound.roundID = 1;
    localThis.newRound.players = await localThis.getPlayers();
    localThis.newRound.promptCard = await localThis.SeeSpecificPrompt(2);
    localThis.newRound.plays = [];
    localThis.newRound.winningCard = [];
    console.log(localThis.newRound);
    return localThis.newRound;
  }
  

  //THIS METHOD WILL BE EDITED LATER

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
    /*localThis.promptDeck = await localThis.createPromptDeck();*/
    localThis.promptDeck = await localThis.create3PromptDeck();
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

  async getGifDeck(): Promise<GifCard[]> {
    let hand: GifCard[] | any = null;
    try {
      let gifString: string = this.randomGifUrl;
      let gifResponse: any = await this.httpClient.get<GifyResponse>(gifString).toPromise();
      hand = gifResponse.data;
      console.log(hand)
    }
    catch (unexpectedException) {
      hand = [];
    }
    return hand;
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
  public name: string = "";
  public mixesMatched: number = 0;
 /* public hand: GifCard[] = [];*/

}
export class Round {
  public roundID: number = 0;
 /* public judge: Player | any = null;*/
  public player: Player | any = null;
  public promptCards: PromptCard[] | any = null;
  public hand: GifCard[] = [];
  //public winningCard: GifCard | any = null;
}
interface GifyResponse {
  data: GifCard[],
  pagination: GifyPaginationResponse,
  meta: GifyMetaResponse
}//end of GifyResponse
interface GifyPaginationResponse {
  total_count: number,
  count: number,
  offest: number
}//end of GifyPaginationResponse
interface GifyMetaResponse {
  status: number,
  msg: string,
  response_id: string
}//end of GifyMetaResponse
export interface GifCard {
  type: string,
  id: string,
  url: string,
  slug: string,
  bitly_gif_url: string,
  bitly_url: string,
  embed_url: string,
  username: string,
  source: string,
  title: string,
  images: GifImage
}
export interface GifImage {
  original: imageInfo,
  downsized: imageInfo
}
export interface imageInfo {
  height: string,
  width: string,
  size: number,
  url: string
}
export class PromptCard {
  public ID: number = 0;
  public promptSentence: string = "";
}
