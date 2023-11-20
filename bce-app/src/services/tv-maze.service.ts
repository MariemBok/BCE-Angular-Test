import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvMazeService {
  private apiUrl = 'http://api.tvmaze.com';
  constructor(private http: HttpClient) {}

  getSeries(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/shows?q=${query}`;
    return this.http.get(url);
  }

  getSeriesDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/shows/${id}`;
    return this.http.get(url);
  }
}
