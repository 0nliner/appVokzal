

import { 
    ADD_WAY_FROM, 
    CHANGE_WAY_FROM, 
    DELETE_WAY_FROM,
    ADD_WAY_BACK, 
    CHANGE_WAY_BACK, 
    DELETE_WAY_BACK,
 } from "./actionTypes";

const INITIAL_STATE = {
    waysFrom: [
        
    ],
    waysBack: [
        
    ],
};


export function ways_reducer (state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_WAY_FROM:
            return {
                ...state,
                waysFrom: [...state.waysFrom, action.value]
            };
        case CHANGE_WAY_FROM: 
            return {
                ...state,
                waysFrom: state.waysFrom.map(n => n.id == action.value.id ? action.value : n),
              };
        case DELETE_WAY_FROM: 
        return {
            ...state,
            waysFrom: state.waysFrom.filter(el => el.id !== action.id)
        };

        case ADD_WAY_BACK:
            return {
                ...state,
                waysBack: [...state.waysBack, action.value]
            };
        case CHANGE_WAY_BACK: 
            return {
                ...state,
                waysBack: state.waysBack.map(n => n.id == action.value.id ? action.value : n),
              };
        case DELETE_WAY_BACK: 
        return {
            ...state,
            waysBack: state.waysBack.filter(el => el.id !== action.id)
        };
        default:
            return state;
    }
}