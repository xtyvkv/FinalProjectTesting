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
  constructor(private newGameService: GameService, private _ActivatedRoute: ActivatedRoute) { }
  public players: Player[] | any = null;
  public newPlayer: Player | any = null;
  public name: string | any = null;

  async ngOnInit(): Promise<void> {
    let thisComponent: CreatePlayerComponent = this;
    let thisString: string | null = "";
    thisString = thisComponent._ActivatedRoute.snapshot.paramMap.get("name");
    thisComponent.name = thisString!;
    thisComponent.players = await thisComponent.newGameService.getPlayers();
   // thisComponent.newPlayer = await thisComponent.newGameService.createPlayer(this.name);
    
  }
  public async getName(name: string): Promise<void> {
    await this.newGameService.getName(name);
    console.log("name added");
    window.alert('name has been added');
  }
  public async createPlayer(playerName: string): Promise<Player> {
    this.newPlayer.name = this.getName(playerName);
    this.newPlayer.mixesMatched = 0;
    await this.newGameService.createPlayer(playerName);
    this.players.push(this.newPlayer);
    console.log("name added");
    window.alert('Player added');
    return this.newPlayer;
  }
}
