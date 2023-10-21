import { Component, OnInit } from '@angular/core';
import { PlayerService,Player } from '../player.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.scss'],
})
export class PlayersViewComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService, private router: Router) {}

  navigateToAddPlayer(): void {
    this.router.navigate(['/add-player']);
  }
  navigateToQueries(): void{
    this.router.navigate(['/player/queries'])
  }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(
      (response: any) => {
        
        if (response && response.data && Array.isArray(response.data)) {
          // Transform the data object into an array of players
          this.players = response.data.map((player: any) => {
            return {
              _id : player._id,
              name: player.name,
              country: player.country,
              matches: player.matches,
              goals: player.goals,
              assists: player.assists,
              tackles: player.tackles,
              // Add more properties if needed
            };
          });
        } else {
          console.error('Invalid API response:', response);
        }
      },
      (error) => {
        console.error('Error loading players:', error);
      }
    );
  }
}
