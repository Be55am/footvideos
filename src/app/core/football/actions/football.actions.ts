import {createAction, props} from '@ngrx/store';
import {Football} from '../models';

export const loadAllSucceeded = createAction('[Football Api] Load All succeeded', props<{footballs: Football[]}>());

export const loadAllFailed = createAction('[Football Api] Load All succeeded', props<{error: any}>());

export const appComponentInitialized = createAction('[App Component] Initialized');

export const loadAllRequested = createAction('[App Component] Load All Requested');
