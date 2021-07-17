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

// ADD

export const add_count = () => ({
    type: ADD_SEATS
});

export const add_width = () => ({
    type: ADD_WIDTH
});

export const add_length = () => ({
    type: ADD_LENGTH
});

export const add_weight = () => ({
    type: ADD_WEIGHT
});

// REMOVE

export const remove_count = () => ({
    type: REMOVE_SEATS,
});

export const remove_width = () => ({
    type: REMOVE_WIDTH
});

export const remove_length = () => ({
    type: REMOVE_LENGTH
});

export const remove_weight = () => ({
    type: REMOVE_WEIGHT
});

export const change_city = () => ({
    type: CHANGE_CITY
});
export const change_city_from = (value) => ({
    type: CHANGE_CITY_FROM,
    value: value
});
export const change_city_to = (value) => ({
    type: CHANGE_CITY_TO,
    value: value
});
