import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GifcarddisplayComponent } from './gifcarddisplay/gifcarddisplay.component';
import { HeaderComponent } from './header/header.component';
import { NewGameComponent } from './new-game/new-game.component';
import { LoadingComponent } from './loading/loading.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { HistoryComponent } from './history/history.component';
import { FinishComponent } from './finish/finish.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GifcarddisplayComponent,
    HeaderComponent,
    NewGameComponent,
    LoadingComponent,
    CreatePlayerComponent,
    HistoryComponent,
    FinishComponent,
    ManagePlayersComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'gifcarddisplay', component: GifcarddisplayComponent },
      { path: 'new-game', component: NewGameComponent },
      { path: 'create-player', component: CreatePlayerComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'finish', component: FinishComponent },
      { path: 'manageplayers', component: ManagePlayersComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
