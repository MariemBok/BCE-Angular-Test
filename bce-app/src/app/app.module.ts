import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesWatchComponent } from './series-watch/series-watch.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesWatchComponent,
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
