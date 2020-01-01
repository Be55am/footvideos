import {Component, Input, OnInit} from '@angular/core';
import {Football} from '../../../../../core/football/models';

@Component({
  selector: 'app-football-video-card',
  templateUrl: './football-video-card.component.html',
  styleUrls: ['./football-video-card.component.css']
})
export class FootballVideoCardComponent implements OnInit {

  @Input() footballVideo: Football;

  constructor() { }

  ngOnInit() {
  }

}
