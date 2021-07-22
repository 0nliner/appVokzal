import React from 'react'
import {Container, makeStyles, Button} from "@material-ui/core";
import {Header} from "../components/Header";
import { Seats } from './Seats';
import { AccordionSeats } from './AccordionSeats'
import { PickCar } from './PickCar';
import { From } from './From';
import { Back } from './Back';


const createTripUseStyles = makeStyles(theme => ({
 btnChoice: {
   backgroundColor: "rgba(41, 67, 103, 1)",
   color: "rgba(255, 255, 255, 1)",
   fontSize: "12px",
   width: "70%",
   marginTop: 30
 }
 }))

const CreateTrip = () => {
  const classes = createTripUseStyles();
  return (
    <div>
      <Header/>
      <Seats />
      <AccordionSeats />
      <PickCar />
      <From />
      <Back />
      <Button className={classes.btnChoice} variant={"contained"} color={"primary"}>
        Создать поездку
      </Button>
    </div>
  )
}

export default CreateTrip;