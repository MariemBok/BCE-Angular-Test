import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SeriesDetailsComponent } from './series-details/series-details.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { TvMazeService } from '../services/tv-maze.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesDetailsComponent,
    CastDetailsComponent,
    EpisodeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [TvMazeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
