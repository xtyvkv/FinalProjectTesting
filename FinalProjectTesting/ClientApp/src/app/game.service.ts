import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  public startGame(): Game {
    return new Game();
  }


}
export class Game {
  public gameID: number = 0;
  public players: Player[] = [];
  public rounds: Round[] = [];
  public promptDeck: PromptCard[] = [];
}
export class Player {
  public ID: number = 0;
  public Name: string = "";
  public LifeTimePoints: number = 0;

}
export class Round {
  public roundID: number = 0;
  public judge: Player | any = null;
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
