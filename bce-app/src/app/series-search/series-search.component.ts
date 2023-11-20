import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';

@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.css'],
})
export class SeriesSearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];
  constructor(private tvMazeService: TvMazeService) {}

  ngOnInit(): void {}

  search() {
    this.tvMazeService.getSeries(this.searchQuery).subscribe(
      (data) => {
        this.searchResults = data;
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
}
