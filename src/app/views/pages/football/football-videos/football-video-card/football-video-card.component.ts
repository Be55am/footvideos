import {Component, Input, OnInit} from '@angular/core';
import {Football} from '../../../../../core/football/models';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-football-video-card',
  templateUrl: './football-video-card.component.html',
  styleUrls: ['./football-video-card.component.css']
})
export class FootballVideoCardComponent implements OnInit {

  @Input() footballVideo: Football;
  page: any;
  url: string;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const text = this.footballVideo.embed;
    const list  = text.split('\'', 6);
    this.url = list[5];
    this.page = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
