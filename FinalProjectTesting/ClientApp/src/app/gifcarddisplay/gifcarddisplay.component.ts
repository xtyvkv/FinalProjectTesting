import { Component, OnInit } from '@angular/core';
import { GifCardService } from '../gif-card.service';

@Component({
  selector: 'app-gifcarddisplay',
  templateUrl: './gifcarddisplay.component.html',
  styleUrls: ['./gifcarddisplay.component.css']
})
export class GifcarddisplayComponent implements OnInit {
  gifs: any[] = [];
  chosenGif: any[] = [];

  constructor(private gifCardService: GifCardService) { }

  ngOnInit(): void {
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

    // this.gifs[0]
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

