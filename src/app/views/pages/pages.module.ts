import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballVideosComponent } from './football/football-videos/football-videos.component';
import { FootballVideoCardComponent } from './football/football-videos/football-video-card/football-video-card.component';
import { FootballVideoListComponent } from './football/football-videos/football-video-list/football-video-list.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatProgressBarModule} from '@angular/material';
import {SanitizeHtmlPipe} from './football/football-videos/football-video-card/sanitize-html.pipe';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [FootballVideosComponent, FootballVideoCardComponent, FootballVideoListComponent, SanitizeHtmlPipe],
  exports: [
    FootballVideosComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ]
})
export class PagesModule { }
