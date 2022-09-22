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
  public createPromptDeck(): Promise<PromptCard[]> {
   
    try {
      let getDeckString: string = this.deckUrl;
      this.promptDeck =  this.httpClient.get<PromptCard[]>(getDeckString).toPromise();
      console.log('Deck made')
    }
    catch (unexpectedException) {
      this.promptDeck = [];
    }

    return this.promptDeck;
  }



  public startGame(): Game {
    return new Game();
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
