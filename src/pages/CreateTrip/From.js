import Accordion from '@material-ui/core/Accordion';

import AccordionDetails from '@material-ui/core/AccordionDetails';
import React, { useState } from 'react'
import {Card, Container, makeStyles, Typography, Button, CardHeader, CardContent} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { withStyles } from "@material-ui/core/styles";
import { add_way_from, change_way_from, delete_way_from } from '../../redux/CreatePage/actions';
import { ways_selector } from "../../redux/CreatePage/selectors";
import {useDispatch, useSelector} from "react-redux";

const AccordionSummary = withStyles({
  root: {
    "&.Mui-focused": {
      backgroundColor: "inherit"
    }
  }
})(MuiAccordionSummary);

const FromUseStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    width: "100%",
    height: 142,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "3px",
    border: "none",
    resize: "none",
    fontSize: "15px",
    marginTop: 10,
    marginBottom: 25,
    outline: "none",
    textIndent: 10,
    paddingTop: 10
  },
  margin: {
    width: "70%",
    
  }
}))

export const From = () => {
  const classes = FromUseStyles();
  
  const [values, setValues] = React.useState({
    id: 0,
    city: '',
    price: 0,
    message: '',
  });

  const handleChangeCity = event => {
    setValues({ ...values, city: event.target.value, id: event.target.id});
    console.log(event)
  };

  const handleChangePrice = event => {
    setValues({ ...values, price: event.target.value });
  };

  const handleChangeMessage = event => {
    setValues({ ...values, message: event.target.value });
  };


  const [show, setShow] = useState({
    displ: [false,false]
  });
  const edit = (id) => {
    let found = show.displ;
    found[id] = true;
    setShow({ ...show, displ: found });
  }
  const ways = useSelector(ways_selector);
  const save = (id) => {
    let found = show.displ;
    found[id] = false;
    setShow({ ...show, displ: found });
    dispatch(change_way_from(values));
    
    console.log(values);
  }

  
  const dispatch = useDispatch();

  const add_way_action = () => {
    show.displ.push(false);
    dispatch(add_way_from(
      {
        id: ways.length,
        city: "",
        price: 0,
        message: ""
      }
      ));
      
      
  }
  return (
    <Container style={{marginTop: 20}}>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="comments"
        >
        <Typography align="left">Маршрут</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display: "flex", flexDirection: "column"}}>
          {
            ways.map(way => {
              return (
              <Card  style={{ width: "100%", marginTop: 10}}>
          <CardHeader
            style={{margin: 0,paddingLeft: 0 }}
            avatar={ show.displ[way.id] ? (
              <InputBase
              id={way.id}
              onChange={handleChangeCity}
              className={classes.margin}
              placeholder="Введите город"
              required
              defaultValue={way.city}
            />) : (
              <Typography style={{paddingLeft: 20}}>{way.city}</Typography>
            )
            }
            action={
              <div style={{marginLeft: -25}}>
                {
                  show.displ[way.id] ? (
                    <IconButton onClick={r => save(way.id)} aria-label="settings">
                    <CheckIcon  />
                  </IconButton>
                  ) : (
                    <IconButton onClick={r => edit(way.id)}  aria-label="settings">
                  <CreateIcon  />
                </IconButton>
                    
                  )
                }
              <IconButton onClick={r => dispatch(delete_way_from(way.id))}  aria-label="settings">
                <DeleteIcon />
              </IconButton>
              </div>
            }
          />
          <CardContent  style={{display: show.displ[way.id] ? 'block' : 'none'}}>
            <Container className={classes.content}>
            <TextField
              onChange={handleChangePrice}
              id="price"
              label="Цена за место до остановки"
              type="number"
              size="medium"
              style={{width: "100%", marginTop: 20}}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Typography style={{marginTop: 20}} align="left">Сообщение пассажирам</Typography>
            <textarea onChange={handleChangeMessage} placeholder="Введите..." className={classes.input} />
            </Container>
            </CardContent>
          </Card>
              )
            })
          }
          <Button onClick={add_way_action} style={{marginTop: 20}} color="rgba(41, 67, 103, 1)" variant="outlined">Добавить остановку</Button>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}