import { FETCH_EVENTS_PER_DAY } from "../constants/actionTypes";

export default (events_per_day = [], action) => {
    switch (action.type) {
        case FETCH_EVENTS_PER_DAY:
            return action.payload
        default: 
            return events_per_day
    }
}