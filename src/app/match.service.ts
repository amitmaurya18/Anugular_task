import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getUpcomingMatches(): Observable<any> {
    return this.http.get('http://192.46.214.33:3000/api/data/getUpcomingMatches');
  }
}
