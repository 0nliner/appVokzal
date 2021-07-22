import React from 'react'
import {Container, makeStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useDispatch, useSelector} from "react-redux";

import { seatsSelector, searchSelector } from "../../redux/findTrips/selectors";
import {add_count, remove_count} from '../../redux/findTrips/actions';
const seatsUseStyles = makeStyles(theme => ({
  seats: {
    width: "45%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 0,
  },
  rootSeats: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    padding: 0,
    paddingRight: 5
  },
  date: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
  },

}))

export const Seats = () => {
  const classes = seatsUseStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-07-30T21:11:54'));
  const dispatch = useDispatch();
  const seats = useSelector(seatsSelector);
  // console.log(seats)
  const decrement_count = () => {
    dispatch(remove_count());
  }
  const increment_count = () => {
    dispatch(add_count());
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Container>
      <Container className={classes.rootSeats}>
        <div className={classes.seats}>
          <Typography variant="body2"> Кол-во мест: {seats.count}</Typography>
          <div>
            <IconButton onClick={decrement_count}  style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA"}} aria-label="remove">
              <RemoveIcon style={{fontSize: "12px"}} />
            </IconButton>
            <IconButton onClick={increment_count}  style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA", marginLeft: 6}} aria-label="add">
            <AddIcon style={{fontSize: "12px"}}/>
            </IconButton>
          </div>
        </div>
        <div className={classes.date}>
          <MuiPickersUtilsProvider  utils={DateFnsUtils}>
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
                  
            id="date-picker-inline"
            label="Дата поездки "
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </MuiPickersUtilsProvider>
        </div>
      </Container>
    </Container>
  )
}