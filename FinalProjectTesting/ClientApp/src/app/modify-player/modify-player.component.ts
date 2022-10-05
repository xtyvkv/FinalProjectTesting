import { Component, Input, OnInit } from '@angular/core';
import { GameService, Game, Round, Player, GifCard, PromptCard, modifyPlayerParameters } from '../game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-modify-player',
  templateUrl: './modify-player.component.html',
  styleUrls: ['./modify-player.component.css']
})
export class ModifyPlayerComponent implements OnInit {

  constructor(private newGameService: GameService, private _ActivatedRoute: ActivatedRoute) { }
  @Input() player: Player | any = null;
  public playerName: FormControl | any = new FormControl('');

  ngOnInit(): void {
    console.log("modifyplayercomponent.ngOnInit()");
  }

  public async deletePlayer(playerName: string): Promise<void> {
    let thisComponent: ModifyPlayerComponent = this;
    await thisComponent.newGameService.deletePlayer(playerName);
    console.log("name passed");
    window.alert('player name deleted');
  }

  startModify: boolean = false; // hidden by default
  startModification() {
    let thisComponent: ModifyPlayerComponent = this;
    if (this.startModify) {
      let thisVariable: modifyPlayerParameters = new modifyPlayerParameters(this.player.id, this.playerName.value);
      thisComponent.newGameService.ModifyPlayers(thisVariable);
      window.alert('Players have been updated!');
    }
    this.startModify = !this.startModify;
  }
}
