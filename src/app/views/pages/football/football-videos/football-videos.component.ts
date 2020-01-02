import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Football, State} from '../../../../core/football/models';
import {select, Store} from '@ngrx/store';
import * as FootballSelectors from '../../../../core/football/selectors';
import {FootballActions} from '../../../../core/football/actions';

@Component({
  selector: 'app-football-videos',
  templateUrl: './football-videos.component.html',
  styleUrls: ['./football-videos.component.css']
})
export class FootballVideosComponent implements OnInit {

  footballs$: Observable<Football[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;
  loading: boolean;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.footballs$ = this.store.pipe(select(FootballSelectors.selectFootballList));
    this.error$ = this.store.pipe(select(FootballSelectors.selectFootballError));
    this.isLoading$ = this.store.pipe(select(FootballSelectors.selectFootballIsLoading));
    this.store.dispatch(FootballActions.appComponentInitialized());
    this.isLoading$.subscribe((result) => {
      this.loading = result;
    });




  }



  onRefresh() {
    this.store.dispatch(FootballActions.loadAllRequested());
  }

}
