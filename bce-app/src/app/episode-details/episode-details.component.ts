import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvMazeService } from '../../services/tv-maze.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent implements OnInit {
  seriesId!: any;
  season!: any;
  episodeNumber!: any;
  episodeDetails!: any;

  constructor(
    private route: ActivatedRoute,
    private tvMazeService: TvMazeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.seriesId = params.get('id');
      this.season = params.get('season');
      this.episodeNumber = params.get('number');
      this.fetchEpisodeDetails();
    });
  }

  fetchEpisodeDetails() {
    this.tvMazeService
      .getEpisodeDetailsByNumber(this.seriesId, this.season, this.episodeNumber)
      .subscribe(
        (data) => {
          this.episodeDetails = data;
        },
        (error) => {
          console.error('Error fetching episode details:', error);
        }
      );
  }
}
