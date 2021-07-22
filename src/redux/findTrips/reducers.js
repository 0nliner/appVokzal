import { 
    ADD_SEATS,
    ADD_LENGTH,
    ADD_WEIGHT,
    ADD_WIDTH,
    REMOVE_SEATS,
    REMOVE_LENGTH,
    REMOVE_WEIGHT,
    REMOVE_WIDTH,
    CHANGE_CITY,
    CHANGE_CITY_FROM,
    CHANGE_CITY_TO
} 
from "./action_type";
import {combineReducers} from "redux";
import {PlacesReducer} from "../AccountPage/reducers";
import { ways_reducer } from "../CreatePage/reducers";


let SEATS_INITIAL_STATE = {
    seats: {
        count: 0,
        width: 20,
        length: 20,
        weight: 20
    },
    city: {
      from: "",
      to: ""
    }
};


export function seats_reducer (state=SEATS_INITIAL_STATE, action) {
    switch (action.type) {

        case ADD_SEATS:
          return {
            seats: {
              count: state.seats.count + 1,
              width: state.seats.width,
              length: state.seats.length,
              weight: state.seats.weight
            },
            city: {
              from: state.city.from,
              to: state.city.to
            }
          };
            
        case REMOVE_SEATS:
          if( state.seats.count > 0 ) {
            return {
              seats: {
                count: state.seats.count - 1,
                width: state.seats.width,
                length: state.seats.length,
                weight: state.seats.weight
              },
              city: {
                from: state.city.from,
                to: state.city.to
              }
            };
          } else return state

        case ADD_WIDTH:
          return {seats: {
            count: state.seats.count,
            width: state.seats.width + 1,
            length: state.seats.length,
            weight: state.seats.weight
          },
          city: {
            from: state.city.from,
            to: state.city.to
          }
        };

        case ADD_LENGTH:
          return {seats: {
            count: state.seats.count,
            width: state.seats.width,
            length: state.seats.length + 1,
            weight: state.seats.weight
          },
          city: {
            from: state.city.from,
            to: state.city.to
          }};

        case ADD_WEIGHT:
          return {seats: {
            count: state.seats.count,
            width: state.seats.width,
            length: state.seats.length,
            weight: state.seats.weight + 1
          },
          city: {
            from: state.city.from,
            to: state.city.to
          }};

        case REMOVE_WIDTH:
          if( state.seats.width > 0 ) {
            return {seats: {
              count: state.seats.count,
              width: state.seats.width - 1,
              length: state.seats.length,
              weight: state.seats.weight
            },
            city: {
              from: state.city.from,
              to: state.city.to
            }};
          } else return state
        
        case REMOVE_LENGTH:
          if( state.seats.length > 0 ) {
            return {seats: {
              count: state.seats.count,
              width: state.seats.width,
              length: state.seats.length - 1,
              weight: state.seats.weight
            },
            city: {
              from: state.city.from,
              to: state.city.to
            }};
          } else return state

        case REMOVE_WEIGHT:
          if( state.seats.weight > 0 ) {
            return {seats: {
              count: state.seats.count,
              width: state.seats.width,
              length: state.seats.length,
              weight: state.seats.weight - 1
            },
            city: {
              from: state.city.from,
              to: state.city.to
            }
          };
          } else return state

        case CHANGE_CITY: 
          return {
            seats: {
              count: state.seats.count,
              width: state.seats.width,
              length: state.seats.length,
              weight: state.seats.weight
            },
            city: {
              from: state.city.to,
              to: state.city.from
            }
        };

        case CHANGE_CITY_FROM: 
          return {
            seats: {
              count: state.seats.count,
              width: state.seats.width,
              length: state.seats.length,
              weight: state.seats.weight
            },
            city: {
              from: action.value,
              to: state.city.to
            }
        };
        case CHANGE_CITY_TO: 
          return {
            seats: {
              count: state.seats.count,
              width: state.seats.width,
              length: state.seats.length,
              weight: state.seats.weight
            },
            city: {
              from: state.city.from,
              to: action.value
            }
        };

        default:
          return state;
    }
}

export const root_reducer = combineReducers({
  seats_reducer: seats_reducer,
  places_reducer: PlacesReducer,
  ways_reducer: ways_reducer
});
