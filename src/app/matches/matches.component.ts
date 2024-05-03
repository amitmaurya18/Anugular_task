import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent implements OnInit{

  Object = Object;
  upcomingMatches: any;

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getUpcomingMatches().subscribe(
      (response: any) => {
        // Assuming the matches are under the 'data' property
        this.upcomingMatches = response.data.matches;
      },
      (error: any) => {
        console.error('Error fetching upcoming matches:', error);
      }
    );
  }

}
