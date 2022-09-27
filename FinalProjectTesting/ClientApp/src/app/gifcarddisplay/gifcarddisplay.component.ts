import { Component, OnInit } from '@angular/core';
import { GifCardService, } from '../gif-card.service';
import { GameService, PromptCard, Game} from '../game.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gifcarddisplay',
  templateUrl: './gifcarddisplay.component.html',
  styleUrls: ['./gifcarddisplay.component.css']
})
export class GifcarddisplayComponent implements OnInit {
  gifs: any[] = [];
  chosenGif: any[] = [];
  promptToShow: PromptCard | any = null;
  public ID: number = 2;
  public promptDeck: PromptCard[] | any = null;
  constructor(private gifCardService: GifCardService, private gameService: GameService , private thisRoute: ActivatedRoute ) { }

 


  async ngOnInit(): Promise<void> {
    this.gifCardService.getRandomGifs()
      .subscribe((response: any) => {
        console.log('gifCards', response);
        this.gifs = response.data;
      });
    this.gifCardService.getChosenGif()
      .subscribe((response: any) => {
        console.log('chosenOne', response);
        this.chosenGif = response.data;
      });
    let thisComponent: GifcarddisplayComponent = this;
    let thisString: string | null = "";
    thisComponent.ID = 2; 
    thisComponent.promptToShow = await thisComponent.gameService.SeeSpecificPrompt(thisComponent.ID);

    /*thisComponent.promptDeck = await thisComponent.gameService.createPromptDeck();*/
    thisComponent.promptDeck = await thisComponent.gameService.create3PromptDeck();


  }

  playBonkSound() {
    let audio = new Audio();
    audio.src = "../assets/audio/bonk.mp3";
    audio.load();
    audio.play();
  }

  playChompSound() {
    let audio = new Audio();
    audio.src = "../assets/audio/chomp.mp3";
    audio.load();
    audio.play();
  }
}

