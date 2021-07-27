import {Box, Card, Container, Grid, Typography, makeStyles, CardActionArea} from "@material-ui/core";
import {Header} from "../components/Header";
import React from "react";

import CardContent from '@material-ui/core/CardContent';
// icons
import ArrowSVG from "../../icons/arrow.svg";
import BasketSVG from "../../icons/basket.svg";
import PenSVG from "../../icons/Pen.svg";
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import CreateIcon from '@material-ui/icons/Create';

const data = [
  [
    {
      city1: "Казань",
      city2: "Оренбург",
      date: "10.08.2021",
      time: "10:30",
      seats: "3",
    }
  ],
  [
    {
      city1: "Сочи",
      city2: "Москва",
      date: "11.08.2021",
      time: "09:40",
      seats: "2",
    },
    {
      city1: "Москва",
      city2: "Сочи",
      date: "13.08.2021",
      time: "08:00",
      seats: "2",
    }
  ],
  
]


const useTripStyles = makeStyles(theme => ({
  root: {
    marginTop: 20
  },
  content: {
    width: "100%"
  },
  pen: {
    display: "flex",
    justifyContent: "flex-end",
    width: "90%",
  },
  city: {
    width: "90%",
    display: "flex",
  },
  info: {
    width: "90%",
    display: "flex",
    justifyContent: "flex-start"
  }
}))

function Trip (props) {
    const classes = useTripStyles();

    return (
      <Grid container xs={"md"} direction={"column"}>
        {data.map(item =>{
          return (
            <Card className={classes.root}>
               <CardActionArea>
                 {item.map(trip => {
            return (
                
                  <CardContent className={classes.content}>
                    {item.indexOf(trip) === 0 && 
                    <div className={classes.pen}><CreateIcon style={{fontSize: "20px"}} /></div>
                    }
                  <div className={classes.city}>
                    <Typography style={{marginTop: 5}} align="left" variant="h6">{trip.city1}</Typography>
                    <TrendingFlatIcon style={{fontSize: "40px"}} />
                    <Typography style={{marginTop: 5}}  align="left" variant="h6">{trip.city2}</Typography>
                  </div>
                  <div className={classes.info}>
                   <Typography style={{width: 47}} align="left" variant="body2">Дата:</Typography>
                   <Typography style={{marginLeft: "10%", opacity: 0.8}} align="left" variant="body2">{trip.date}</Typography>
                  </div>
                  <div className={classes.info}>
                    <Typography style={{width: 47}}  align="left" variant="body2">Время:</Typography>
                    <Typography  style={{marginLeft: "10%", opacity: 0.8}} align="left" variant="body2">{trip.time}</Typography>
                  </div>
                  <div className={classes.info}>
                    <Typography style={{width: 47}}  align="left" variant="body2">Места:</Typography>
                    <Typography  style={{marginLeft: "10%", opacity: 0.8}} align="left" variant="body2">{trip.seats}</Typography>
                  </div>
                  </CardContent>
            )
          })}
               </CardActionArea>
            </Card>
          )
          
          
        })}
      </Grid>
      
        // <Card>
        //   <CardActionArea>
        //     <CardContent className={classes.content}>
        //       <div className={classes.pen}><CreateIcon style={{fontSize: "20px"}} /></div>
        //       <div className={classes.city}>
        //         <Typography style={{marginTop: 5}} align="left" variant="h6">Сочи</Typography>
        //         <TrendingFlatIcon style={{fontSize: "40px"}} />
        //         <Typography style={{marginTop: 5}}  align="left" variant="h6">Санкт-Петербург</Typography>
        //       </div>
        //       <div className={classes.city}>
        //         <Typography  align="left" variant="body2">Дата:</Typography>
        //         <Typography style={{width: 65}} align="left" variant="caption">10.08.2021</Typography>
        //       </div>
              // <div className={classes.city}>
              //   <Typography  align="left" variant="body2">Время:</Typography>
              //   <Typography  style={{width: 65}} align="left" variant="caption">10:30</Typography>
              // </div>
              // <div className={classes.city}>
              //   <Typography  align="left" variant="body2">Места:</Typography>
              //   <Typography  style={{width: 65}} align="left" variant="caption">3</Typography>
              // </div>
        //     </CardContent>
        //   </CardActionArea>
        // </Card>
    );
}

function Trips (props) {

    return (
        <Container>
            <Grid container xs={"md"} direction={"column"}>
                <Trip></Trip>
            </Grid>
        </Container>
    );
}

export function TripsPage (props) {
    return (
      <Box className={"TripsPage"}>
          <Header/>
          <Trips/>
      </Box>
    );
}