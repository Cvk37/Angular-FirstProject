import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService, Player } from '../player.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {
  playerId: string='';
  player: Player = {
    _id: '', 
    name: '',
    country: '',
    position: '',
    matches: 0,
    goals: 0,
    assists: 0,
    tackles: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerId = params['id'];
      // Fetch player details using playerId and populate the form
      this.playerService.getPlayerbyId(this.playerId).subscribe(
        (response: any) => {
          this.player = response.data;
        },
        error => {
          console.error('Error fetching player details:', error);
        }
      );
    });
  }

  onSubmit(): void {
    this.playerService.updatePlayer(this.playerId, this.player).subscribe(
      (response: any) => {
        console.log('Player updated successfully:', response);
        this.router.navigate(['/', 'stats',this.playerId]);
      },
      error => {
        console.error('Error updating player:', error);
      }
    );
  }
}
