
import {CHANGE_PLACE_STATE, CHANGE_PLACE_STATE_DRIVER} from "./actionTypes";

export const change_place_state = (index) => ({
    type: CHANGE_PLACE_STATE,
    index: index
});

export const change_place_state_driver = (index) => ({
    type: CHANGE_PLACE_STATE_DRIVER,
    index: index
});