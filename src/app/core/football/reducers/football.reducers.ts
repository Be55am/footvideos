import {Action, createReducer, on} from '@ngrx/store';
import {initialState, State} from '../models';
import {FootballActions} from '../actions';

export const footballFeatureKey = 'football';

const featureReducer = createReducer(
  initialState,
  on(
    FootballActions.loadAllRequested,
    FootballActions.appComponentInitialized,
      state => ({...state, isLoading: true, error: ''})),
  on(
    FootballActions.loadAllSucceeded,
    (state, {footballs}) => ({... state, isLoading: false, footballs})),
  on(FootballActions.loadAllFailed, (state, {error}) => ({... state, isLoading: false, error}) )
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
