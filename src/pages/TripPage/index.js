import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Button, Card, CardMedia, CardActionArea, Container, FormControl, FormControlLabel, FormLabel, Grid,
    makeStyles, Radio,
    RadioGroup, TextField,
    Typography
} from "@material-ui/core";
import auto from '../../images/auto.png'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {Header} from "../components/Header";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import baby from '../../icons/baby.svg';
import smoke from '../../icons/smoke.svg';
import dog from '../../icons/dog.svg';
import song from '../../icons/song.svg';
import pocket from '../../icons/pocket.svg';
let useTripPageStyles = makeStyles(theme => ({
    main: {
        display: "flex",
        flexWrap: "wrap"
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        padding: 5,
        width: "100%"
    },
    media: {
        height: 60,
        width: 110,
        backgroundSize: "cover",
        color: "rgba(255,255,255,0.8)",
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    },
    btnContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    },
    btnAdd: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        background: "#FFFFFF",
        border: "1px solid #000000",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",
        paddingLeft: 20,
        paddingRight: 20
    }
}));




function CarSelection (props) {
    const classes = useTripPageStyles();

    return (
        <Accordion style={{marginTop: 30}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>Автомобили</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.main}>
                {/*выбор автомобиля*/}
                <div className={classes.root}>
                    <Card style={{margin: 2, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                        <CardActionArea>
                            <CardMedia
                                component="div"
                                className={classes.media}
                                image={auto}
                                title="Contemplative Reptile"
                            >   
                                <Typography style={{fontSize: "8px"}} variant="caption">Toyota Corolla</Typography>
                                <CreateIcon style={{fontSize: "11px"}}  />
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                    <Card style={{margin: 2, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                        <CardActionArea>
                            <CardMedia
                                component="div"
                                className={classes.media}
                                image={auto}
                            >   
                                <Typography style={{fontSize: "8px"}} variant="caption">Toyota Corolla</Typography>
                                <CreateIcon style={{fontSize: "11px"}}  />
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                    <Card style={{margin: 2, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                        <CardActionArea>
                            <CardMedia
                                component="div"
                                className={classes.media}
                                image={auto}
                               
                            >   
                                <Typography style={{fontSize: "8px"}} variant="caption">Toyota Corolla</Typography>
                                <CreateIcon style={{fontSize: "11px"}}  />
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                    <Card style={{margin: 2, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                        <CardActionArea>
                            <CardMedia
                                component="div"
                                className={classes.media}
                                image={auto}
                                
                            >   
                               <Typography style={{fontSize: "8px"}} variant="caption">Toyota Corolla</Typography>
                                <CreateIcon style={{fontSize: "11px"}}  />
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                </div>
                <div className={classes.btnContainer}>
                    <button className={classes.btnAdd}>
                        <Typography style={{fontSize:"9px"}} variant="caption">Добавить</Typography>
                        <AddIcon style={{fontSize:"25px"}} />
                    </button>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}
const aboutUseStyles = makeStyles(theme => ({
  main: {
    flexWrap: "wrap"
  },
  root: {
    display: "flex",
    width: "100%"
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  information: {
    paddingLeft: 40
  },
  conditions: {
    marginTop: 30,
  },
  icons: {
    display: "flex",
    marginTop: 10
  },
  icon: {
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    background: "#E8E8E8",
    marginLeft: 10
  },
  links: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  buttons: {
    textTransform: "capitalize",
  }
}))

function About (props) {
    const classes = aboutUseStyles();
    const text = "Альбе́рт Эйнште́йн (нем. Albert Einstein, МФА [ˈalbɐt ˈaɪ̯nʃtaɪ̯n] Информация о файле слушать[C 1]; 14 марта 1879, Ульм, Королевство Вюртемберг, Германия — 18 апреля 1955, Принстон, Нью-Джерси, США) — физик-теоретик, один из основателей современной теоретической физики, лауреат Нобелевской премии по физике 1921 года, общественный деятель-гуманист. Жил в Германии (1879—1893, 1914—1933), откуда с приходом к власти нацистов был вынужден эмигрировать и был лишён гражданства; Швейцарии (1893—1914), и с 1933 года до конца жизни — в США. Почётный доктор около 20 ведущих университетов мира, член многих Академий наук, в том числе иностранный почётный член АН СССР"
    return (
      <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>О себе</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.main}>
              <div className={classes.root}>
                <div className={classes.avatar}>
                  <Avatar src={auto} className={classes.large} />
                </div>
                <div className={classes.information}>
                  <Typography align="left" variant="h6">Густав Маск</Typography>
                  <Typography style={{fontSize: "10px"}} align="left" variant="body2">Телефон: <span style={{opacity: 0.7}}>+7(999)-999-99-99</span></Typography>
                  <Typography style={{fontSize: "10px"}} align="left" variant="body2">Email: <span style={{opacity: 0.7}}>sahar@gmail.com</span></Typography>
                  <Typography style={{fontSize: "10px"}} align="left" variant="caption">Водительское удостоверение</Typography>
                </div>

              </div>
              <div className={classes.conditions}>
                <Typography align="left" variant="body1">Условия поездки:</Typography>
                <div className={classes.icons}>
                  <div className={classes.icon}><img src={baby} /></div>
                  <div className={classes.icon}><img src={smoke} /></div>
                  <div className={classes.icon}><img src={dog} /></div>
                  <div className={classes.icon}><img src={song} /></div>
                  <div className={classes.icon}><img src={pocket} /></div>
                </div>
              </div>
              <Accordion style={{marginTop: 25}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography variant="body2">О себе</Typography>
                </AccordionSummary>
              <AccordionDetails className={classes.main}>
              <Typography align="left" variant="caption">{text}</Typography>
            </AccordionDetails>
          </Accordion>
            <div className={classes.links}>
              {/* Оставить по центру? Мне кажется так лучше.  */}
              <Button align="left" className={classes.buttons} variant="text">Оплата</Button>
              <Button className={classes.buttons} variant="text">Полученные отзывы</Button>
              <Button className={classes.buttons} variant="text">Оставленные отзывы</Button>
              <Button className={classes.buttons} variant="text">Пароль</Button>
              <Button className={classes.buttons} variant="text">Оповещения и способы связи</Button>
              <Button className={classes.buttons} variant="text">Оценить в App Store</Button>
              <Button className={classes.buttons} variant="text">Помощь</Button>
              <Button className={classes.buttons} variant="text">Условия использования</Button>
              <Button className={classes.buttons} variant="text">Конфиденциальность</Button>
              <Button className={classes.buttons} variant="text">Выйти</Button>
            </div>
            </AccordionDetails>
      </Accordion>
    )
}





export function TripPage (props) {
    const classes = useTripPageStyles();

    return (
        <DragDropContext onDropEnd={result => console.log(result)}>
            <Box className={""}>
                <Header/>

                <Container xs={"lg"}>
                    <CarSelection/>
                    <About/>
                </Container>

            </Box>
        </DragDropContext>
    );
}