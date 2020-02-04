import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {PagesModule} from './views/pages/pages.module';
import * as fromFootballVideo from './core/football/reducers/football.reducers';
import {EffectsModule} from '@ngrx/effects';
import {FootballStoreEffects} from './core/football/effects/football.effects';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    StoreModule.forFeature(fromFootballVideo.footballFeatureKey, fromFootballVideo.reducer),
    EffectsModule.forFeature([FootballStoreEffects]),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains the last 25 states
    }),
    PagesModule,
    MatToolbarModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
