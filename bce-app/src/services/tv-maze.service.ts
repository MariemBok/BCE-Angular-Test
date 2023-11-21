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

  getSeasons(id: number): Observable<any> {
    const url = `${this.apiUrl}/shows/${id}/seasons`;
    return this.http.get(url);
  }

  getEpisodes(seriesId: number): Observable<any> {
    const url = `${this.apiUrl}/shows/${seriesId}/episodes`;
    return this.http.get(url);
  }

  getEpisodeDetailsByNumber(
    seriesId: string,
    season: string,
    episodeNumber: string
  ): Observable<any> {
    const url = `${this.apiUrl}/shows/${seriesId}/episodebynumber?season=${season}&number=${episodeNumber}`;
    return this.http.get(url);
  }

  getCast(id: number): Observable<any> {
    const url = `${this.apiUrl}/shows/${id}/cast`;
    return this.http.get(url);
  }

  getCastDetails(personId: number): Observable<any> {
    const url = `${this.apiUrl}/people/${personId}`;
    return this.http.get(url);
  }
}
