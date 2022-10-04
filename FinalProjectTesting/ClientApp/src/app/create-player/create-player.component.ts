import { Component, OnInit } from '@angular/core';
import { GameService, Game, Round, Player, GifCard, PromptCard } from '../game.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  
  //setInputData(text: string) {
  //  this.inputText = text;
  //}
  constructor(private newGameService: GameService, private _ActivatedRoute: ActivatedRoute, private _thisRoute: Router) { }
  public players: Player[] | any = null;
  public newPlayer: Player | any = null;
  /*public name: string | any = null;*/

  async ngOnInit(): Promise<void> {
    let thisComponent: CreatePlayerComponent = this;
   // let thisString: string | null = "";
   // thisString = thisComponent._ActivatedRoute.snapshot.paramMap.get("name");
   // thisComponent.name = thisString;
    thisComponent.players = await thisComponent.newGameService.getPlayers();
   // thisComponent.newPlayer = await thisComponent.newGameService.createPlayer(this.name);
    
  }
  public async getName(name: string): Promise<void> {
    await this.newGameService.getName(name);
    console.log(name);
    window.alert(name);
    /*window.alert('name has been added');*/
  }
  public async createPlayer(playerName: string): Promise<void> {
    let thisComponent: CreatePlayerComponent = this;
    //this.newPlayer.name = this.createPlayer(playerName);
    //this.newPlayer.mixesMatched = 0;
    await thisComponent.newGameService.createPlayer(playerName);
    console.log("name added");
    window.alert('Player added');
    this._thisRoute.navigateByUrl('gifcarddisplay');
  }
  public async deletePlayer(playerName: string): Promise<void> {
    let thisComponent: CreatePlayerComponent = this;
    await thisComponent.newGameService.deletePlayer(playerName);
    console.log("name passed");
    window.alert('player name deleted');
  }
}
