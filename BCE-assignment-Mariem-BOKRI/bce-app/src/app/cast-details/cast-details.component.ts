import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvMazeService } from '../../services/tv-maze.service';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css'],
})
export class CastDetailsComponent implements OnInit {
  personId!: number;
  personDetails: any;

  constructor(
    private route: ActivatedRoute,
    private tvMazeService: TvMazeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.personId = Number(params.get('id'));
      this.loadPersonDetails();
    });
  }

  loadPersonDetails() {
    this.tvMazeService.getCastDetails(this.personId).subscribe(
      (data) => {
        this.personDetails = data;
      },
      (error) => {
        console.error('Error fetching person details:', error);
      }
    );
  }
}
