// допустимые значения для status
// 0 - место не забронировано
// 1 - место недоступно для бронирования
// 2 - место забронированно

import {CHANGE_PLACE_STATE, CHANGE_PLACE_STATE_DRIVER} from "./actionTypes";

const INITIAL_STATE = {
    places: [
        {
            index: 7,
            status: 0
        },
        {
            index: 6,
            status: 0
        },
        {
            index: 5,
            status: 0
        },
        {
            index: 4,
            status: 0
        },
        {
            index: 3,
            status: 0
        },
        {
            index: 2,
            status: 0
        },
        {
            index: 1,
            status: 0
        }
    ]
};


export function PlacesReducer (state=INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_PLACE_STATE:
            let state_copy = [];
            for (let place of state.places) {
                if (place.index == action.index) {
                    state_copy = state_copy.concat({
                        index: place.index,
                        status: (place.status + 1) % 2
                    });
                    console.log((place.status + 1) % 3)
                }
                else {
                    state_copy = state_copy.concat(place);
                }
            }
            return { places: state_copy}

        case CHANGE_PLACE_STATE_DRIVER:
          let state_copy_driver = [];
          for (let place of state.places) {
              if (place.index == action.index) {
                state_copy_driver  = state_copy_driver .concat({
                      index: place.index,
                      status: (place.status + 1) % 3
                  });
              }
              else {
                state_copy_driver  = state_copy_driver .concat(place);
              }
          }
          return { places: state_copy_driver }

        default:
            return state;
    }
}