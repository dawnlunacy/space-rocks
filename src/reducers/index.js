import { combineReducers } from 'redux';
import { neos } from './neos';
import { totalNeos } from './totalNeos';
import { prevWeekUrl } from './prevWeekUrl';
import { nextWeekUrl } from './nextWeekUrl';
import { loadingNeos } from './loadingNeos';
import { currentNeoDate } from './currentNeoDate';
import { startDate } from './startDate';
import { apod } from './apod';


export const rootReducer = combineReducers({
   neos,
   totalNeos,
   prevWeekUrl,
   nextWeekUrl,
   loadingNeos,
   currentNeoDate,
   startDate,
   apod
});