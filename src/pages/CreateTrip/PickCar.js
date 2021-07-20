import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import React from 'react'
import {Container, makeStyles, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const PickCarUseStyles = makeStyles(theme => ({
  '.MuiRadio-colorSecondary.Mui-checked': {
    color: "black"
  }
}))

export const PickCar = () => {
  const classes = PickCarUseStyles();
  
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <Container style={{marginTop: 20}}>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="comments"
        >
        <Typography align="left">Выбор автомобиля в поездку</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup aria-label="car" name="cars" value={value} onChange={handleChange}>
              <FormControlLabel style={{color: "#757575"}} value="Toyota Corolla" control={<Radio />} label="Toyota Corolla" />
              <FormControlLabel style={{color: "#757575"}} value="Toyota Supra" control={<Radio />} label="Toyota Supra" />
              <FormControlLabel style={{color: "#757575"}} value="Honda CVC" control={<Radio />} label="Honda CVC" />
              <FormControlLabel style={{color: "#757575"}} value="Mitsubishi Lancer V" control={<Radio />} label="Mitsubishi Lancer V" />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}