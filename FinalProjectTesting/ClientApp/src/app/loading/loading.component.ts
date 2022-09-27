import { Component, OnInit } from '@angular/core';
import { GameService, Game, Round, Player, GifCard, PromptCard } from '../game.service';
import { NewGameComponent } from '../new-game/new-game.component';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private newGameService: GameService, private newgamecomp: NewGameComponent) { }
  /*public players*/

  ngOnInit(): void {
    let playOneDeck: GifCard[] = [];
    let playTwoDeck: GifCard[] = [];
    let playThreeDeck: GifCard[] = [];
  }

}
