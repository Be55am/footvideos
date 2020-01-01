import {Component, Input, OnInit} from '@angular/core';
import {Football} from '../../../../../core/football/models';

@Component({
  selector: 'app-football-video-list',
  templateUrl: './football-video-list.component.html',
  styleUrls: ['./football-video-list.component.css']
})
export class FootballVideoListComponent implements OnInit {

  @Input() videoList: Football[];
  @Input() isLoading: boolean;
  @Input() error: string;

  constructor() { }

  ngOnInit() {
  }

}
