import {Football} from './football';

export interface State {
  footballs: Football[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  footballs: null,
  isLoading: false,
  error: '',
};
