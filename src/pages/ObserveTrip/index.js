import {Header} from "../components/Header";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Card,
    Container,
    Grid, makeStyles, MobileStepper, Paper,
    Typography,
    useTheme,
    Button, Checkbox, CardActionArea, CardContent, Tabs, Tab, IconButton
} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import React from "react";
import avatar from '../../images/avatar.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator
} from "@material-ui/lab";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Places} from "../components/Places";

import autoPicture from '../../images/auto.png';
import autoicon from '../../icons/MyCar 1.svg';
import cardPay from '../../icons/card.svg';
import nalPay from '../../icons/money.svg';
import baby from '../../icons/baby.svg';
import smoke from '../../icons/smoke.svg';
import dog from '../../icons/dog.svg';
import song from '../../icons/song.svg';
import pocket from '../../icons/pocket.svg';
const aboutUseStyles = makeStyles(theme => ({
    root: {

    },
    containerAbout: {
      display: "flex",
      justifyContent: "space-between",
      padding: 5,
      marginTop: 20
    },
    name: {
      display: "flex",
      width: "100%",
      paddingLeft: "15%",
      flexDirection: "column"
    },
    avatar: {
      height: 70,
      width: 70
    },
    username: {
      display: "flex",
      flexDirection: "row",
      height: 20,
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    way: {
      display: "flex",
      padding: 0,
      
    },
    item: {
      padding: 0,
      margin: 0,
      "&::before": {
        display: "none"
      }
    },
    price: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 0,
      padding: 0,
      marginTop: -40
    }

}))

const About = () => {
    const classes = aboutUseStyles();
    return (
        <Container className={classes.root}>
            <Container className={classes.containerAbout}>
                <Avatar className={classes.avatar} src={avatar}></Avatar>
                  <div className={classes.name}>
                    <div className={classes.username}>
                      <Typography style={{fontSize: "13px"}} variant="body2">Elon Musk</Typography>
                      <Typography style={{fontSize: "9px"}} variant="caption">49 лет</Typography>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <Typography style={{fontSize: "10px"}}variant="caption">2,9</Typography>
                        <StarIcon style={{color: "#FFA011", fontSize: "12px"}} />
                      </div>
                    </div>
                    <div className={classes.way}>
            <Timeline style={{marginTop: 10, padding: 0}}>
              <TimelineItem className={classes.item}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{textAlign: "left", paddingLeft: 15, fontSize: "11px"}}>Казань</TimelineContent>
              </TimelineItem >
              <TimelineItem className={classes.item}>
                  <TimelineDot />
                <TimelineContent style={{textAlign: "left", paddingLeft: 15, fontSize: "11px"}}>Сочи</TimelineContent>
              </TimelineItem>
              </Timeline>
                    </div>
                  </div>
                  
            </Container>
           <Container className={classes.price}>
             <Typography style={{fontSize: "9px"}}> Цена за место: {500} руб</Typography>
             <Typography style={{fontSize: "9px"}}> Свободных мест: {3}</Typography>
           </Container>
        </Container>
    )
}


const autoUseStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
  },
  auto: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#F7F7F9",
    paddingLeft: 15,
    paddingRight: 15,
    height: "38px",
    marginTop: 5
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "left",
    padding: 0
  },
  seats: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15
  },
  image: {
    borderRadius: "3px",
    filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))",
    width: "50%",
    height: "25%"
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "white",
    width: "85%",
    padding: 10,
    display: "flex",
    flexDirection: "column"
  },
  btn: {
    backgroundColor: "rgba(41, 67, 103, 1)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: "12px",
    textTransform: "none"
}
}))

const Auto = () => {
  const classes = autoUseStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container className={classes.root}>
      <Typography align="left" variant="body2">Автомобиль:</Typography>
      <div className={classes.auto}>
        <div className={classes.item}>
          <Typography style={{fontSize: "8px"}}>Модель</Typography>
          <Typography style={{fontSize: "6px"}}>{"Tesla model x"}</Typography>
        </div>
        <div className={classes.item}>
          <Typography style={{fontSize: "8px"}}>Класс</Typography>
          <Typography style={{fontSize: "6px"}}>{"Комфорт"}</Typography>
        </div>
        <div className={classes.item}>
          <Typography style={{fontSize: "8px"}}>Цвет</Typography>
          <Typography style={{fontSize: "6px"}}>{"Белый"}</Typography>
        </div>
      </div>
      <div className={classes.seats}>
        <img className={classes.image}  src={autoPicture}></img>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Card style={{borderRadius: "14px", boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)", maxHeight: "77px"}}>
            <CardActionArea >
              <CardContent  style={{padding: 10}}>
                
                  <img onClick={handleOpen}  src={autoicon}/>
             
                <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography align="center" variant="h6">Выбор места</Typography>
            <Typography style={{opacity: 0.7}} align="center" variant="p">Toyota Land Cruiser 200</Typography>
            <Grid style={{width: "100%",display: "flex", justifyContent: "center", alignItems: "center",marginTop: 15}} container>
              <Grid className={classes.containerPlace}>
              <Places/>
                <Container style={{display: "flex", justifyContent: "center", width: "100%", padding: 0, marginTop: 20, paddingBottom: 20, alignItems: "center"}}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <div style={{width: 10, height: 10, borderRadius: "50%", backgroundColor: "#757575"}}></div>
                    <Typography style={{fontSize: "0.8em", marginLeft: 6}} variant={"caption"}>Место занято</Typography>
                  </div>
                  <div style={{display: "flex", marginLeft: 10,alignItems: "center"}}>
                    <div style={{width: 10, height: 10, borderRadius: "50%", backgroundColor: "#27AE60"}}></div>
                    <Typography style={{fontSize: "0.8em", marginLeft: 6}} variant={"caption"}>Место свободно</Typography>
                  </div>
                </Container>
              </Grid>
            </Grid>
            <Button className={classes.btn} onClick={handleClose} variant={"contained"} color={"primary"} style={{marginBottom: 10}}>
                    Потвердить
            </Button>
          </div>
        </Fade>
      </Modal>
              </CardContent>
            </CardActionArea>
          </Card>
          <Typography style={{fontSize: "8px", marginTop: 5}}>Выбрать место</Typography>
          </div>
        </div>
    </Container>
  )
}


const commentsUseStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    boxShadow: "none",
    background: "#F7F7F9"
  },
  cardHeader: {
    width: "100%",
    paddingBottom: 7,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  accardionCards: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "none"
  }
}));

const data = [
  {
    id: 1,
    name: "Владислав Вовк",
    stars: 3.4,
    comment: "Все отлично, поездка мне понравилась. Была вода и хорошая беседа."
  },
  {
    id: 2,
    name: "Качан Данила",
    stars: 4.0,
    comment: "Все отлично, поездка мне понравилась. Была вода и хорошая беседа."
  },
  {
    id: 3,
    name: "Анатолий Кучарян",
    stars: 2.9,
    comment: "Все отлично, поездка мне понравилась. Была вода и хорошая беседа."
  },
  {
    id: 4,
    name: "Анастасия Синякова",
    stars: 5.0,
    comment: "Все отлично, поездка мне понравилась. Была вода и хорошая беседа."
  }
]

const Comments = () => {
  const classes = commentsUseStyles();

  return (
    <Container>
      <Accordion className={classes.accardionCards}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="comments"
        >
          <Typography align="left">Отзывы</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accardionCards}>
          {
            data.map(item => {
              return (
                <Card className={classes.card}>
                  <CardContent>
                    <div className={classes.cardHeader}>
                      <Typography style={{fontSize: "11px"}}>{item.name}</Typography>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <Typography style={{fontSize: "9px"}}variant="caption">{item.stars}</Typography>
                        <StarIcon style={{color: "#FFA011", fontSize: "12px"}} />
                      </div>
                    </div>
                    <Typography align="left" style={{fontSize: "10px"}}>{item.comment}</Typography>
                  </CardContent>
                </Card>
              )
            })
          }
        </AccordionDetails>
      </Accordion>
      <div>
        <Typography align="left" style={{fontSize: "10px", fontWeight: "bold"}}>Сообщение от водителя:</Typography>
        <Card style={{width: "100%", minHeight: "115px", marginTop: 10}}>
          <CardContent>
            <Typography style={{fontSize: "10px"}} align="left">
              Заберу с вашего дома.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

const payUseStyles = makeStyles(theme => ({
 root: {
   width: "100%",
   marginTop: 10
 },
 icons: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 30
},
icon: {
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 40,
  height: 40,
  background: "#E8E8E8",
  marginLeft: 10,
  "&:nth-child(1)": {
    marginLeft: 0
  }
},
buttons: {
 display: "flex",
 justifyContent: "center",
 marginTop: 30,
 marginLeft: -15,
 paddingBottom: 20
},
btnBack: {
  backgroundColor: "rgba(41, 67, 103, 1)",
  color: "rgba(255, 255, 255, 1)",
  fontSize: "12px",
  textTransform: "none",
  width: "20%"
},
btnChoice: {
  backgroundColor: "rgba(41, 67, 103, 1)",
  color: "rgba(255, 255, 255, 1)",
  fontSize: "12px",
  textTransform: "none",
  width: "70%",
  marginLeft: 20
}
}))

const Pay = () => {
  const classes = payUseStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Typography style={{marginTop: 20}} align="left">Способ оплаты</Typography>
      <Tabs centered className={classes.root} value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
      <Tab wrapped className={classes.item} icon={<img src={nalPay} />} label="Наличные"  />
      <Tab wrapped className={classes.item} label="Перевод" icon={<img src={cardPay} />} />
      </Tabs>
      <div className={classes.icons}>
                  <div className={classes.icon}><img src={baby} /></div>
                  <div className={classes.icon}><img src={smoke} /></div>
                  <div className={classes.icon}><img src={dog} /></div>
                  <div className={classes.icon}><img src={song} /></div>
                  <div className={classes.icon}><img src={pocket} /></div>
      </div>

      <div className={classes.buttons}>
        <Button className={classes.btnBack} variant={"contained"} color={"primary"}>
          <ChevronLeftIcon />
        </Button>
        <Button className={classes.btnChoice} variant={"contained"} color={"primary"}>
          Выбрать водителя
        </Button>

      </div>
    </Container>
  )
}

export const ObserveTrip = (props) => {
    
    return (
        <div>
            <Header />
            <About />
            <Auto />
            <Comments />
            <Pay />
        </div>
    )
}