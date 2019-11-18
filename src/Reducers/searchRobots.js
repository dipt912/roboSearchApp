
import { CHANGE_SEARCH_FIELD } from '../constants.js';

const intialStage = {
    searchField : '',
}

export const searchRobots = (state=intialStage, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
           return { ...state, searchField : action.payload } 
        default:
        return state;   
    }
}
