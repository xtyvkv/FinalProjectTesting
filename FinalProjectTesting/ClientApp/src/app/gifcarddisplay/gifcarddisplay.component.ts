import { Component, OnInit } from '@angular/core';
import { GifCardService, } from '../gif-card.service';
import { GameService, PromptCard, Game, Player} from '../game.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gifcarddisplay',
  templateUrl: './gifcarddisplay.component.html',
  styleUrls: ['./gifcarddisplay.component.css']
})
export class GifcarddisplayComponent implements OnInit {
  gifs: any[] = [];
  singleGif1: any | null;
  singleGif2: any | null;
  singleGif3: any | null;
  promptToShow: PromptCard | any = null;
  public ID: number = 2;
  public promptDeck: PromptCard[] | any = null;
  public players: Player[] | any = null;

  constructor(private gifCardService: GifCardService, private gameService: GameService , private thisRoute: ActivatedRoute ) { }

 


  async ngOnInit(): Promise<void> {
    //this.gifCardService.getRandomGifs()
    //  .subscribe((response: any) => {
    //    console.log('gifCards', response);
    //    this.gifs = response.data;
    //  });
    // reaction
    this.gifCardService.getSingleRandomGif1()
      .subscribe((response: any) => {
        console.log('1', response);
        this.singleGif1 = response.data;
      });
    // sad
    this.gifCardService.getSingleRandomGif2()
      .subscribe((response: any) => {
        console.log('2', response);
        this.singleGif2 = response.data;
      });
    // happy
    this.gifCardService.getSingleRandomGif3()
      .subscribe((response: any) => {
        console.log('3', response);
        this.singleGif3 = response.data;
      });

    let thisComponent: GifcarddisplayComponent = this;
    let thisString: string | null = "";
    thisComponent.ID = 2; 
    thisComponent.promptToShow = await thisComponent.gameService.SeeSpecificPrompt(thisComponent.ID);

    /*thisComponent.promptDeck = await thisComponent.gameService.createPromptDeck();*/
    thisComponent.promptDeck = await thisComponent.gameService.create3PromptDeck();
    thisComponent.players = await thisComponent.gameService.getPlayers();

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

  isShown: boolean = false; // hidden by default
  toggleShow() {

    this.isShown = !this.isShown;

  }

}

