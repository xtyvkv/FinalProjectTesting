import { Component, OnInit } from '@angular/core';
import { GameService, Game, Round, Player, GifCard, PromptCard, modifyPlayerParameters } from '../game.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-manage-players',
  templateUrl: './manage-players.component.html',
  styleUrls: ['./manage-players.component.css']
})
export class ManagePlayersComponent implements OnInit {

  constructor(private newGameService: GameService, private _ActivatedRoute: ActivatedRoute) { }
  public players: Player[] | any = null;
  public newPlayer: Player | any = null;


  async ngOnInit(): Promise<void> {
    let thisComponent: ManagePlayersComponent = this;
    thisComponent.players = await thisComponent.newGameService.getPlayers();
  }

  public async getName(name: string): Promise<void> {
    await this.newGameService.getName(name);
    console.log(name);
    window.alert(name);
    /*window.alert('name has been added');*/
  }
  public async createPlayer(playerName: string): Promise<void> {
    let thisComponent: ManagePlayersComponent = this;
    //this.newPlayer.name = this.createPlayer(playerName);
    //this.newPlayer.mixesMatched = 0;
    await thisComponent.newGameService.createPlayer(playerName);
    console.log("name added");
    window.alert('Player added');
  }
  public async deletePlayer(playerName: string): Promise<void> {
    let thisComponent: ManagePlayersComponent = this;
    await thisComponent.newGameService.deletePlayer(playerName);
    console.log("name passed");
    window.alert('player name deleted');
  }
  startModify: boolean = false; // hidden by default
  startModification(playerID: number, playerName: string) {
    let thisComponent: ManagePlayersComponent = this;
    let thisVariable: modifyPlayerParameters = new modifyPlayerParameters(playerID, playerName);
    this.startModify = !this.startModify;
    if (this.startModify == false) {
      thisComponent.newGameService.ModifyPlayers(thisVariable);
      window.alert('Players have been updated!');
    }
  }

}
