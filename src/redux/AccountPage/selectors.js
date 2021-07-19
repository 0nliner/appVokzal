export let placesSelector = (state) => state.places_reducer.places;
export let placeSelector = (index) => ((state) => state.places_reducer.places.find(place => place.index === index))
