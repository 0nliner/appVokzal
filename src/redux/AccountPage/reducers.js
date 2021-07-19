// допустимые значения для status
// 0 - место не забронировано
// 1 - место недоступно для бронирования
// 2 - место забронированно

import {CHANGE_PLACE_STATE} from "./actionTypes";

const INITIAL_STATE = {
    places: [
        {
            index: 0,
            status: 0
        },
        {
            index: 1,
            status: 0
        },
        {
            index: 2,
            status: 0
        },
        {
            index: 3,
            status: 0
        }
    ]
};


export function PlacesReducer (state=INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_PLACE_STATE:
            let state_copy = [];
            for (let place of state.places) {
                if (place.index === action.index) {
                    state_copy = state_copy.concat({
                        index: place.index,
                        status: (place.status + 1) % 3
                    });
                }
                else {
                    state_copy = state_copy.concat(place);
                }
            }
            return state_copy;

        default:
            return state;
    }
}