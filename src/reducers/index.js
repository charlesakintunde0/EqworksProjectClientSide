import {combineReducers} from 'redux'


import events_per_day from './events_per_day'
import events_per_hour from './events_per_hour'
import stats_per_day from './stats_per_day'
import stats_per_hour from './stats_per_hour'


export const reducers = combineReducers({
    events_per_day,
    events_per_hour,
    stats_per_day,
    stats_per_hour 

})