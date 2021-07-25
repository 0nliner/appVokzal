import {Box, makeStyles, IconButton, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {placeSelector, placesSelector} from "../../redux/AccountPage/selectors";
// icons
import DefaultSeat from "../../icons/default_seat.svg";
import ReservedSeat from "../../icons/reserved_seat.svg";
import BlockedSeat from "../../icons/blocked_seat.svg";
import Wheel from "../../icons/wheel.svg";
import { change_place_state } from '../../redux/AccountPage/actions'


let useStyles = makeStyles(theme => ({
    base: {
        border: "1px solid #C0C0C0",
        borderRadius: 9,
        minHeight: 20,
        maxWidth: 300,
        padding: "14px 9px",
        display: "flex",
        flexWrap: "wrap"
    },
    btn: {
        width: "33%",
        
    },
    containerBtn: {
        display: "flex",
        flexDirection: "column"
    }
}));

export function Places (props) {
    let classes = useStyles();
    const dispatch = useDispatch();
    const places = useSelector(placesSelector);

    function Place ({index, state}) {
        let place = useSelector(placeSelector(index));
        switch (place.status) {
            case 0:
                return (
                    <IconButton onClick={e => dispatch(change_place_state(place.index))} className={classes.btn}>
                        <div className={classes.containerBtn}>
                            <img src={DefaultSeat}/>
                            <Typography style={{fontSize: "9px"}}>{place.index}</Typography>
                        </div>
                    </IconButton>
                );

            case 1:
                return (
                    <IconButton  onClick={e => dispatch(change_place_state(place.index))} className={classes.btn}>
                        <div className={classes.containerBtn}>
                            <img src={ReservedSeat}/>
                            <Typography style={{fontSize: "9px"}}>{place.index}</Typography>
                        </div>
                    </IconButton>
                    
                );

            case 2:
                return (
                    <IconButton disabled  className={classes.btn}>
                        <img  src={BlockedSeat}/>
                        <Typography style={{fontSize: "9px"}}>{place.index}</Typography>
                    </IconButton>
                );
        }
    }
    
    let places_components = [];
    
    
    return (
        <Box className={classes.base}>
            {places.map(item => {
   
                return (
                        <Place {...item} />    
                )
            })}
            
                <div className={classes.btn}>

                </div>
                <IconButton disabled className={classes.btn}>
                    <img  src={Wheel}/>
                </IconButton>
            
        </Box>
    );
}
