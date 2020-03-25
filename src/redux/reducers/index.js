// @flow
import { combineReducers } from 'redux';
import { racersReducer } from './racers';
import { racerReducer } from './racer';
import { racesReducer } from './races';

export const rootReducer = combineReducers({
  racers: racersReducer,
  racer: racerReducer,
  races: racesReducer,
});
