import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesSearchComponent,
    SeriesDetailsComponent,
    CastDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
