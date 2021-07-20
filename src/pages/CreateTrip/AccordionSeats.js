import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import React from 'react'
import {Container, makeStyles, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const accordionSeatsUseStyles = makeStyles(theme => ({

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
          
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}