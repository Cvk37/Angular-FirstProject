import { Component, OnInit } from '@angular/core';
import { PlayerService, Player } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-queries',
  templateUrl: './player-queries.component.html',
  styleUrls: ['./player-queries.component.scss']
})
export class PlayerQueriesComponent implements OnInit {
  playersFromEngland: Player[] = [];
  highestGoalScorer: Player;
  highestAssistMaker: Player;
  highestTackles: Player;
  playersSortedByMatches: Player[] = [];

  constructor(private playerService: PlayerService,private router: Router) { 
    
    this.highestGoalScorer = {} as Player;
    this.highestTackles ={} as Player;
    this.highestAssistMaker={} as Player;
    
}

  ngOnInit(): void {
    // Fetch players from England
    this.playerService.getPlayersFromEngland().subscribe(data => {
      this.playersFromEngland = data;
    });

    // Fetch highest goal scorer
    this.playerService.getHighestGoalScorer().subscribe(data => {
      this.highestGoalScorer = data;
    });

    // Fetch highest assist maker
    this.playerService.getHighestAssistMaker().subscribe(data => {
      this.highestAssistMaker = data;
    });

    // Fetch highest tackles
    this.playerService.getHighestTackles().subscribe(data => {
      this.highestTackles = data;
    });

    // Fetch players sorted by matches
    this.playerService.getPlayersSortedByMatches().subscribe(data => {
      this.playersSortedByMatches = data;
    });
  }
  navigateToHomePage(): void {
    this.router.navigate(['/']);
  }
}
