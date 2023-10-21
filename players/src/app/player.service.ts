import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,pipe,tap } from 'rxjs';

export interface Player {
  _id: string;
  name: string;
  country: string;
  position: string;  
  matches: number;
  goals: number;
  assists: number;
  tackles: number;
  
}


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:8080/api/players'; // Replace this with your actual API endpoint
  private queryurl='http://localhost:8080/api'

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`).pipe(
      tap((response:any) => {
        console.log('Response from getPlayers:', response);
      })
      );
  }
 getPlayerbyId(playerId:string):Observable<any>{
  return this.http.get(`${this.apiUrl}/${playerId}`)
 }
  getPlayerStatsById(playerId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${playerId}/stats`);
  }
  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.apiUrl}`, player);
  }
  deletePlayer(playerId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${playerId}`);
  }
  updatePlayer(playerId: string, player: Player): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${playerId}`, player);
  }
  getPlayersFromEngland(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.queryurl}/players-from-england`);
  }

  getHighestGoalScorer(): Observable<Player> {
    return this.http.get<Player>(`${this.queryurl}/highest-goal-scorer`);
  }

  getHighestAssistMaker(): Observable<Player> {
    return this.http.get<Player>(`${this.queryurl}/highest-assist-maker`);
  }

  getHighestTackles(): Observable<Player> {
    return this.http.get<Player>(`${this.queryurl}/highest-tackles`);
  }

  getPlayersSortedByMatches(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.queryurl}/players-sorted-by-matches`);
  }
  
}
