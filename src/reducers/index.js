import { combineReducers } from 'redux';
import { neos } from './neos';
import { totalNeos } from './totalNeos';
import { prevWeekUrl } from './prevWeekUrl';

export const rootReducer = combineReducers({
   neos,
   totalNeos,
   prevWeekUrl
});