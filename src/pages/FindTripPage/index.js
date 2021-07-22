import React from "react";
import {
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    Container,
    makeStyles,
    Typography, 
} from "@material-ui/core";
import {Header} from "../components/Header";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// icons
import SwapVertIcon from '@material-ui/icons/SwapVert';
import poput from '../../icons/poput.svg';
import econom from '../../icons/econom.svg';
import comfort from '../../icons/comfort.svg';
import mini from '../../icons/miniven.svg';
import bus from '../../icons/bus.svg';
import gruz from '../../icons/gruz.svg';
import delivery from '../../icons/delivery 2.svg';
import special from '../../icons/special.svg';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
// images
import AvatarDemo from "../../images/avatar.png";
import { seatsSelector, searchSelector } from "../../redux/findTrips/selectors";
import {useDispatch, useSelector} from "react-redux";
import {add_count, remove_count, add_length, add_weight, add_width, remove_length, remove_weight, remove_width, change_city, change_city_from, change_city_to} from '../../redux/findTrips/actions';

// --------------------- Search component -------------
const useSearchStyles = makeStyles( theme => ({
    root: {
        marginTop: 10
    },
    input: {
        width: "calc(100% - 30px)",
        height: "40px",
        borderRadius: "21px",
        background: "#EAEAEA",
        fontSize: "15px",
        paddingLeft: 30,
        border: "none",
        marginTop: 10,
        outline: "none",
        "&:active": {
            outline: "none"
        }

    },
    swap: {
        width: 40,
        height: 40,
        position: "absolute",
        top: 103,
        right: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        borderRadius: "50%",
        border: "none",
        background: "#FFFFFF",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        "&:hover": {
            border: "none",
            background: "white"
        }
    }
}));
const Search = () => {
    const classes = useSearchStyles();
    const city = useSelector(searchSelector);
    const dispatch = useDispatch();

    const change_city_btn = () => {
      dispatch(change_city())
    };

    return (
        <Container className={classes.root}>
            <input onChange={e => dispatch(change_city_from(e.target.value))} value={city.from} placeholder="Откуда" type="text"  className={classes.input} />
            <input onChange={e => dispatch(change_city_to(e.target.value))} value={city.to} placeholder="Куда" type="text"  className={classes.input} />
            <IconButton onClick={change_city_btn} className={classes.swap}><SwapVertIcon /></IconButton>
        </Container>
    );
}


// --------------------- Service component ----------------
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        style={{display: "flex", justifyContent: "center", marginTop: 10}}
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box style={{display: "flex", justifyContent: "space-between", padding: 5, flexWrap: "wrap"}}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }
  

const useServiceStyles = makeStyles( theme => ({
    root: {
        display: "flex",
        marginTop: 50,
        width: "100%",
        paddingBottom: 5,
        
    },
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "9px",
        textTransform: "capitalize"
    },
    seats: {
      width: "50%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      padding: 0,
      marginLeft: -20
      
    },
    date: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      padding: 0,
      margin: 0
    },
    containerDelivery: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      paddingBottom: 20
    },
    itemDelivery: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      
    },

}))

const Service = () => {
    const classes = useServiceStyles();
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-07-30T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const seats = useSelector(seatsSelector);
  // console.log(seats)
  const decrement_count = () => {
    dispatch(remove_count());
  }

  const decrement_width = () => {
    dispatch(remove_width());
  }

  const decrement_length = () => {
    dispatch(remove_length());
  }

  const decrement_weight = () => {
    dispatch(remove_weight());
  }

  const increment_count = () => {
    dispatch(add_count());
  }

  const increment_width = () => {
    dispatch(add_width());
  }

  const increment_length = () => {
    dispatch(add_length());
  }

  const increment_weight = () => {
    dispatch(add_weight());
  }
  
  
    return (
      
        <div>
        <Tabs  variant="scrollable" value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" className={classes.root}>
            
            <Tab className={classes.item} value="1" {...a11yProps('1')} label="Попутчик" icon={<img src={poput} />} />
            
            <Tab className={classes.item} value="2" {...a11yProps('2')} label="Эконом" icon={<img src={econom} />} />
            <Tab className={classes.item} value="3" {...a11yProps('3')} label="Комфорт" icon={<img src={comfort} />} />
            <Tab className={classes.item} value="4" {...a11yProps('4')} label="Минивэн" icon={<img src={mini} />} />
            <Tab className={classes.item} value="5" {...a11yProps('5')} label="Автобус" icon={<img src={bus} />} />
            <Tab className={classes.item} value="6" {...a11yProps('6')} label="Грузовые" icon={<img src={gruz} />} />
            <Tab className={classes.item} value="7" {...a11yProps('7')} label="Посылки" icon={<img src={delivery} />} />
            <Tab className={classes.item} value="8" {...a11yProps('8')} label="Спецтехника" icon={<img src={special} />} />
        </Tabs>
        {
          ["1","2","3","4","5","6","8"].map(item => {
            return (
              
              <TabPanel value={value} index={item}>
                <div className={classes.seats}>
                  <Typography variant="body1"> Кол-во мест: {seats.count}</Typography>
                  <div>
                    <IconButton onClick={decrement_count} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA"}} aria-label="remove">
                      <RemoveIcon style={{fontSize: "15px"}} />
                    </IconButton>
                    <IconButton onClick={increment_count} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA", marginLeft: 6}} aria-label="add">
                    <AddIcon style={{fontSize: "15px"}}/>
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
                </TabPanel>  
            )
          })
        }
        <TabPanel value={value} index="7">
          <div className={classes.containerDelivery}>
            <div className={classes.itemDelivery}>
              <Typography variant="caption">Ширина(см)</Typography>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <IconButton onClick={decrement_width} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA", width: 20, height: 20}} aria-label="remove">
                  <RemoveIcon style={{fontSize: "12px"}} />
                </IconButton>
                <Typography style={{marginRight: 5, marginLeft: 5}} variant="body2">{seats.width}</Typography>
                <IconButton onClick={increment_width} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA", width: 20, height: 20}} aria-label="add">
                  <AddIcon style={{fontSize: "12px"}}/>
                </IconButton>
              </div>
              </div>
              <div className={classes.itemDelivery}>
              <Typography variant="caption">Длина(см)</Typography>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <IconButton onClick={decrement_length} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA", width: 20, height: 20}} aria-label="remove">
                  <RemoveIcon style={{fontSize: "12px"}} />
                </IconButton>
                <Typography style={{marginRight: 5, marginLeft: 5}} variant="body2">{seats.length}</Typography>
                <IconButton onClick={increment_length} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA", width: 20, height: 20}} aria-label="add">
                  <AddIcon style={{fontSize: "12px"}}/>
                </IconButton>
              </div>
              </div>
              <div className={classes.itemDelivery}>
              <Typography variant="caption">Вес(кг)</Typography>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <IconButton onClick={decrement_weight} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA", width: 20, height: 20}} aria-label="remove">
                  <RemoveIcon style={{fontSize: "12px"}} />
                </IconButton>
                <Typography style={{marginRight: 5, marginLeft: 5}} variant="body2">{seats.weight}</Typography>
                <IconButton onClick={increment_weight} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA", width: 20, height: 20}} aria-label="add">
                  <AddIcon style={{fontSize: "12px"}}/>
                </IconButton>
              </div>
            </div>
          </div>
        <div className={classes.seats}>
                  <Typography variant="body1"> Кол-во мест: {seats.count}</Typography>
                  <div>
                    <IconButton onClick={decrement_count} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA"}} aria-label="remove">
                      <RemoveIcon style={{fontSize: "15px"}} />
                    </IconButton>
                    <IconButton onClick={increment_count} style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", color: "#91B3FA", marginLeft: 6}} aria-label="add">
                    <AddIcon style={{fontSize: "15px"}}/>
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
        </TabPanel>
        </div>
     
    )
}

// -------------------- Drivers --------------------

const useDriversStyles = makeStyles( theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  information: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    color: "#757575",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#757575"
  },
  auto: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#757575"
  }
}))

const Drivers = (props) => {
  const classes = useDriversStyles();

  const data = [
    {
      name: "Илон",
      age: 49,
      auto: "Nissan Silvia",
      time: "16:00",
      price: 400
    },
    {
      name: "Илон",
      age: 49,
      auto: "Nissan Silvia",
      time: "16:00",
      price: 400
    },
    {
      name: "Илон",
      age: 49,
      auto: "Nissan Silvia",
      time: "16:00",
      price: 400
    }
  ]
  return (
    <Container>
      {
        data.map(driver => {
          return (
            <Card style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", borderRadius: "11px", marginBottom: 15}}>
              <CardActionArea>
                <CardContent className={classes.root}>
                  <div className={classes.information}>
                    <Typography style={{width: "100%"}} align="left" variant="body2">{driver.time}</Typography>
                    <Typography style={{width: "100%"}} align="left" variant="body2">{driver.price} руб</Typography>
                  </div>
                  <div className={classes.profile}>
                    <Avatar src={AvatarDemo} />
                    <Typography variant="caption">{driver.name} - {driver.age} лет</Typography>
                  </div>
                  <div className={classes.auto}>
                    <Avatar  src={AvatarDemo} />
                    <Typography variant="caption">{driver.auto}</Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })
      }
      
    </Container>
  )
}

export const FindTripPage = (props) => {
    return (
        <Box>
            <Header/>
            <Container>
                <Search />
                <Service />
                <Drivers />
            </Container>
        </Box>
    );
}