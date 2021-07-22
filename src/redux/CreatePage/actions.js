
import { 
    ADD_WAY_FROM, 
    CHANGE_WAY_FROM, 
    DELETE_WAY_FROM,
    ADD_WAY_BACK, 
    CHANGE_WAY_BACK, 
    DELETE_WAY_BACK,
 } from "./actionTypes";

export const add_way_from = value => ({
    type: ADD_WAY_FROM,
    value: value
});

export const change_way_from = value => ({
    type: CHANGE_WAY_FROM,
    value: value
});

export const delete_way_from = id => ({
    type: DELETE_WAY_FROM,
    id: id
});

export const add_way_back = value => ({
    type: ADD_WAY_BACK,
    value: value
});

export const change_way_back = value => ({
    type: CHANGE_WAY_BACK,
    value: value
});

export const delete_way_back = id => ({
    type: DELETE_WAY_BACK,
    id: id
});