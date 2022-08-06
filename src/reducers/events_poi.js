import { FETCH_EVENTS_POI } from "../constants/actionTypes";

export default (events_poi = [], action) => {
    switch (action.type) {
        case FETCH_EVENTS_POI:
            return action.payload
        default:
           return events_poi;
    }
}