import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/shows', pathMatch: 'full' },
  { path: 'shows', component: SeriesSearchComponent },
  {
    path: 'show/:id',
    component: SeriesDetailsComponent,
    children: [
      { path: 'episodes/:season/:number', component: EpisodeDetailsComponent },
      { path: 'cast/:actorid', component: CastDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
