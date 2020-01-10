import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from '../models/state';
import * as fromFootballReducer from '../reducers/football.reducers';


// todo examine this line here
const getFootballState = createFeatureSelector<State>(
  fromFootballReducer.footballFeatureKey
);

export const selectFootballList = createSelector(getFootballState, (state: State) => state.footballs);
export const selectFootballIsLoading = createSelector(getFootballState, (state: State) => state.isLoading || false);
export const selectFootballError = createSelector(getFootballState, (state: State) => state.error.message || null);



