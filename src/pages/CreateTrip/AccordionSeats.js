import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import React from 'react'
import {Container, makeStyles, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



import {Box, IconButton} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {placeSelector, placesSelector} from "../../redux/AccountPage/selectors";
// icons
import DefaultSeat from "../../icons/default_seat.svg";
import ReservedSeat from "../../icons/reserved_seat.svg";
import BlockedSeat from "../../icons/blocked_seat.svg";
import { change_place_state_driver } from '../../redux/AccountPage/actions'
import Wheel from "../../icons/wheel.svg";

let useStyles = makeStyles(theme => ({
    base: {
        border: "1px solid #C0C0C0",
        borderRadius: 9,
        minHeight: 20,
        maxWidth: 300,
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
                    <IconButton onClick={e => dispatch(change_place_state_driver(place.index))} className={classes.btn}>
                        <div className={classes.containerBtn}>
                            <img src={DefaultSeat}/>
                            <Typography style={{fontSize: "9px"}}>{place.index}</Typography>
                        </div>
                    </IconButton>
                );

            case 1:
                return (
                    <IconButton  onClick={e => dispatch(change_place_state_driver(place.index))} className={classes.btn}>
                        <div className={classes.containerBtn}>
                            <img src={ReservedSeat}/>
                            <Typography style={{fontSize: "9px"}}>{place.index}</Typography>
                        </div>
                    </IconButton>
                    
                );

            case 2:
                return (
                    <IconButton  onClick={e => dispatch(change_place_state_driver(place.index))} className={classes.btn}>
                      <div className={classes.containerBtn}>
                        <img  src={BlockedSeat}/>
                        <Typography style={{fontSize: "9px"}}>{place.index}</Typography>
                        </div>
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







const accordionSeatsUseStyles = makeStyles(theme => ({
  containerPlace: {
    width: "80%",
}
}))




export const AccordionSeats = () => {
  const classes = accordionSeatsUseStyles();
  
  
  return (
    <Container style={{marginTop: 20}}>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="comments"
        >
          <Typography align="left">Места</Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:5}}>
        <Grid style={{width: "100%",display: "flex", justifyContent: "center", alignItems: "center",}} container>
            <Grid className={classes.containerPlace}>
              <Places />
              <Container style={{display: "flex", justifyContent: "space-between", width: "110%", padding: 0, marginLeft: -15, marginTop: 20, paddingBottom: 20}}>
                <div style={{display: "flex"}}>
                  <div style={{width: 10, height: 10, borderRadius: "50%", backgroundColor: "#757575"}}></div>
                  <Typography style={{fontSize: "8px", marginLeft: 3}} variant={"caption"}>Свободные места</Typography>
                </div>
                <div style={{display: "flex", marginLeft: 3}}>
                  <div style={{width: 10, height: 10, borderRadius: "50%", backgroundColor: "#27AE60"}}></div>
                  <Typography style={{fontSize: "8px", marginLeft: 3}} variant={"caption"}>Забронированное место</Typography>
                </div>
                <div style={{display: "flex", marginLeft: 3}}>
                  <div style={{width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EB5757"}}></div>
                  <Typography style={{fontSize: "8px", marginLeft: 3}} variant={"caption"}>Недоступно</Typography>
                </div>

              </Container>
            </Grid>
            
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}