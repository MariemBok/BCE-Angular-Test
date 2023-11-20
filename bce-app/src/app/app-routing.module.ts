import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SeriesSearchComponent },
  { path: 'details/:id', component: SeriesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
