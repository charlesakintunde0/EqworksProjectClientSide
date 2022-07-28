import { FETCH_STATS_PER_HOUR } from "../constants/actionTypes";


export default (stats_per_hour = [], action) => {
    switch (action.type) {
        case FETCH_STATS_PER_HOUR:
            return action.payload
        default: 
            return stats_per_hour
    }
}