import { FETCH_EVENTS_PER_HOUR, FETCH_EVENTS_PER_DAY,FETCH_STATS_PER_HOUR,FETCH_STATS_PER_DAY } from "../constants/actionTypes";


import * as api from "../api";


export const fetchEventsHourly = () => async(dispatch) => {
    try {
        const {data} = await api.fetchEventsHourly()

        dispatch({type: FETCH_EVENTS_PER_HOUR, payload: data})
    }catch (error) {
        console.log(error.message)
    }
}

export const fetchEventsDaily = () => async(dispatch) => {
    try {
        const {data} = await api.fetchEventsDaily()
        dispatch({type: FETCH_EVENTS_PER_DAY, payload: data})
    }catch (error) {
        console.log(error.message)
    }
}

export const fetchStatsHourly = () => async(dispatch) => {
    try {
        const {data} = await api.fetchStatsHourly()
        dispatch({type: FETCH_STATS_PER_HOUR, payload: data})
    }catch (error) {
        console.log(error.message)
    }
}
export const fetchStatsDaily = () => async(dispatch) => {
    try {
        const {data} = await api.fetchStatsDaily()

        dispatch({type: FETCH_STATS_PER_DAY, payload: data})
    }catch (error) {
        console.log(error.message)
    }
}