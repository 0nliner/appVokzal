import  {createSelector} from "reselect"


export const seatsSelector = createSelector(
    state => state.seats_reducer.seats,
    seats => seats
);

export const searchSelector = createSelector(
    state => state.seats_reducer.city,
    city => city
);
