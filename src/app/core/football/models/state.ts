import {Football} from './football';

export interface State {
  footballs: Football[];
  isLoading: boolean;
  error: any;
}

export const initialState: State = {
  footballs: null,
  isLoading: false,
  error: null,
};
