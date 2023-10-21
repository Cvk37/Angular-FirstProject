import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersViewComponent } from './players-view/players-view.component';
import { PlayerService } from './player.service';
import { PlayerServiceModule } from './player-service.module';
import { FormsModule } from '@angular/forms';
import { AddPlayersComponent } from './add-players/add-players.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { PlayerQueriesComponent } from './player-queries/player-queries.component';
@NgModule({
  declarations: [
    AppComponent,
    PlayersViewComponent,
    AddPlayersComponent,
    UpdatePlayerComponent,
    PlayerQueriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PlayerServiceModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
