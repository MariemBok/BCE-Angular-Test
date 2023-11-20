import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.css'],
})
export class SeriesSearchComponent implements OnInit {
  searchQuery: string = 'girls';
  searchResults: any[] = [];
  constructor(private tvMazeService: TvMazeService) {}

  ngOnInit(): void {}

  search(query: string) {
    this.tvMazeService
      .getSeries(query)
      .pipe(map((data: any[]) => data.map((item) => item.show)))
      .subscribe(
        (processedData) => {
          console.log('Processed results:', processedData);
          this.searchResults = processedData;
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
  }
}
