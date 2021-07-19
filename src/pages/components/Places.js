import {Box, makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {placeSelector, placesSelector} from "../../redux/AccountPage/selectors";
// icons
import DefaultSeat from "../../icons/default_seat.svg";
import ReservedSeat from "../../icons/reserved_seat.svg";
import BlockedSeat from "../../icons/blocked_seat.svg";



let useStyles = makeStyles(theme => ({
    base: {
        border: "1px solid #C0C0C0",
        borderRadius: 9,
        minHeight: 20,
        maxWidth: 300,
        padding: "14px 9px"
    }
}));

export function Places (props) {
    let classes = useStyles();
    const dispatch = useDispatch();
    let places = useSelector(placesSelector);

    function Place ({index, state}) {
        let place = useSelector(placeSelector(index));

        switch (place.status) {
            case 0:
                return (
                    <img src={DefaultSeat}/>
                );

            case 1:
                return (
                    <img src={BlockedSeat}/>
                );

            case 2:
                return (
                    <img src={ReservedSeat}/>
                );
        }
    }
    
    return (
        <Box className={classes.base}>
            {places.map(place_data => <Place {...place_data}/>)}
        </Box>
    );
}
