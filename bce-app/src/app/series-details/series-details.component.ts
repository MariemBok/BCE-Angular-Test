import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvMazeService } from '../../services/tv-maze.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css'],
})
export class SeriesDetailsComponent implements OnInit {
  seriesId!: number;
  seriesDetails: any;
  seriesSeasons: any[] = [];
  seriesEpisodes: any[] = [];
  cast: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private tvMazeService: TvMazeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.seriesId = +params['id'];
      this.loadSeriesDetails();
    });

    const showId = this.seriesId;

    this.tvMazeService.getSeasons(showId).subscribe(
      (seasonsData) => {
        this.seriesSeasons = seasonsData;
      },
      (error) => {
        console.error('Error fetching seasons information:', error);
      }
    );

    this.tvMazeService.getEpisodes(this.seriesId).subscribe(
      (episodesData) => {
        this.seriesEpisodes = episodesData;
      },
      (error) => {
        console.error('Error fetching episodes information:', error);
      }
    );

    this.tvMazeService.getCast(this.seriesId).subscribe(
      (data) => {
        this.cast = data;
      },
      (error) => {
        console.error('Error fetching cast details:', error);
      }
    );
  }

  loadSeriesDetails() {
    this.tvMazeService.getSeriesDetails(this.seriesId).subscribe(
      (data) => {
        console.log('Series details received', data);
        this.seriesDetails = data;
      },
      (error) => {
        console.error('Error fetching series details:', error);
      }
    );
  }
}
