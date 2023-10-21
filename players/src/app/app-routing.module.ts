import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersViewComponent } from './players-view/players-view.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { StatsComponent } from './stats/stats.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { PlayerQueriesComponent } from './player-queries/player-queries.component';

const routes: Routes = [
  {path:'',component:PlayersViewComponent},
  { path: 'add-player', component:AddPlayersComponent },
  { path: 'stats/:id', component: StatsComponent },
  { path: 'update-player/:id', component: UpdatePlayerComponent },
  { path:'player/queries',component:PlayerQueriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
