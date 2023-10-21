import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  playerName: string = '';
  playerStats: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const playerId = params['id'];
      this.playerService.getPlayerStatsById(playerId).subscribe(
        (response: any) => {
          this.playerStats = response.data;
          this.playerName = this.playerStats.name;
        },
        (error: any) => {
          console.error('Error fetching player stats:', error);
        }
      );
    });
  }
  navigateToUpdatePlayer(): void {
    this.router.navigate([`/update-player/${this.playerStats._id}`]);
  };

  deletePlayer(): void {
    if (!confirm('Are you sure you want to delete this player?')) {
      return;
    }

    const playerId = this.playerStats._id;
    this.playerService.deletePlayer(playerId).subscribe(
      () => {
        console.log('Player deleted successfully');
        // Navigate back to the main page after deletion
        this.router.navigateByUrl('/');
      },
      (error: any) => {
        console.error('Error deleting player:', error);
      }
    );
  }
  navigateToHomePage(): void {
    this.router.navigate(['/']);
  }
}
