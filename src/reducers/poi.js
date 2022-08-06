import {  FETCH_POI } from "../constants/actionTypes";


export default (poi = [], action) => {
    switch (action.type) {
        case FETCH_POI:
            return action.payload
        default: 
            return poi
    }
}