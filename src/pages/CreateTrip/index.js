import React from 'react'
import {Container, makeStyles} from "@material-ui/core";
import {Header} from "../components/Header";
import { Seats } from './Seats';
import { AccordionSeats } from './AccordionSeats'
import { PickCar } from './PickCar';


const CreateTrip = () => {
  return (
    <div>
      <Header/>
      <Seats />
      <AccordionSeats />
      <PickCar />
    </div>
  )
}

export default CreateTrip;