import { FETCH_STATS_POI } from "../constants/actionTypes";


export default (stats_poi = [], action) => {
    switch(action.type) {
        case FETCH_STATS_POI:
            return action.payload
        default:
            return stats_poi
    }
}