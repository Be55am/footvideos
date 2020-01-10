import {Injectable} from '@angular/core';
import {FootballService} from '../services/football.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {FootballActions} from '../actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class FootballStoreEffects {

  constructor(private footballService: FootballService, private actions$: Actions) {
  }

  // switchMap will cancel the successive requests and its a good thing to do in this case
  loadAllRequested$ = createEffect(() =>
    this.actions$.pipe(
    ofType(FootballActions.loadAllRequested, FootballActions.appComponentInitialized),
      switchMap(() => this.footballService.getFootballVideos()
      .pipe(
      map(footballs => FootballActions.loadAllSucceeded({footballs})),
      catchError(error => of(FootballActions.loadAllFailed({error})))
    )))
  );

  // loadAllRequested$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(
  //         FootballActions.loadAllRequested, FootballActions.appComponentInitialized),
  //       mergeMap(() =>
  //         this.footballService.getFootballVideos().pipe(
  //           map(footballs => FootballActions.loadAllSucceeded({footballs})),
  //           catchError(error =>
  //             of(FootballActions.loadAllFailed({error}))
  //           )
  //         )
  //       )
  //     );
  //   }
  // );
}
