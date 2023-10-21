import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService, Player } from '../player.service';


@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss']
})
export class AddPlayersComponent {
  player: Player = { 
    _id:'',
    name: '',
    country: '',
    position: '',
    matches: 0,
    goals: 0,
    assists: 0,
    tackles: 0,
    };
  constructor(private playerService: PlayerService, private router: Router) {}
  onSubmit(): void {
    this.playerService.addPlayer(this.player).subscribe(
      (response: any) => {
        console.log('Player added successfully:', response);
       
        if (response && response.data && response.data._id) {
          // Navigate to the player's stats page with the new player's ID
          this.router.navigate(['/stats',response.data._id]);
        } else {
          console.error('Invalid response from the server:', response);
        }
      },
      error => {
        console.error('Error adding player:', error);
    
      }
    );
}
}