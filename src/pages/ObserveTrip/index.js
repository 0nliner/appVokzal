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
    Button, Checkbox
} from "@material-ui/core";

import React from "react";

import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator
} from "@material-ui/lab";

import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import starSVG from "../../icons/star.svg";
import MoneySVG from "../../icons/money.svg";
import CardSVG from "../../icons/card.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InfoIcon from '@material-ui/icons/Info';

import AvatarDemo from "../../images/avatar.png";





let useCardStyles = makeStyles(theme => ({
    avatar: {
        marginLeft: "auto",
        marginRight: "auto",
    },

    aboutCar: {
        backgroundColor: "#F7F7F9",
        color: "#434343",
        width: "100%",
        padding: "5px 7px",
        marginBottom: 20

    },

    aboutCarSecondaryText: {
        color: "#434343"
    },

    //    image slider classes
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },

    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));


let useCommentClasses = makeStyles(theme => ({
    commentRoot: {
        backgroundColor: "#F7F7F9",
        padding: "5px",
        position: "relative",
        width: "100%",
        marginBottom: 10
    }
}));



// TODO: удалить тестовые данные
const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

let useDriverMessageStyles = makeStyles(theme => ({
    textStyle: {
        color: "#1358a0"
    }
}));

let useBillingStyles = makeStyles(theme => ({
    billingMethod: {

    }
}))

function Comment (props) {
    let classes = useCommentClasses();

    return (
        <Box className={classes.commentRoot}>
            <Grid container justify="space-between">
                {/*<Grid item xs={8}>*/}
                    <Typography>
                        Гоша Григорий
                    </Typography>
                {/*</Grid>*/}

                <Grid item>
                    {/*<Box style={{position: "absolute", right: 0}}>*/}

                    2,9
                    <img src={starSVG} style={{position: "relative", top: "3px", height: "15px"}}/>
                    {/*</Box>*/}
                </Grid>

            </Grid>

            <Grid container style={{paddingLeft: "20px", paddingRight: "20px"}}>
                <Typography align="left" variant="caption">
                    тестовый текст тестовый текст тестовый текст тестовый текст тестовый текст тестовый текст
                    тестовый текст тестовый текст тестовый текст тестовый текст тестовый текст тестовый текст
                    тестовый текст тестовый текст
                </Typography>

            </Grid>
        </Box>
    )
}

function DriverMessage (props) {
    let classes = useDriverMessageStyles();

    return (
        <Grid container
              // classes={}
              direction={"column"}
              style={{
                backgroundColor: "#e8f4fd",
                borderRadius: "5px",
                padding: "10px",
                position: "relative",
                marginBottom: 30
              }}>
            <Grid container style={{marginBottom: 15}}>
                <InfoIcon style={{color: "#1358a0", marginRight: 10}}/>
                <Typography align={"left"} className={classes.textStyle}>
                    сообщение от водителя
                </Typography>
            </Grid >

            <Typography align={"left"} variant={"caption"} className={classes.textStyle}>
                Очень важное сообщение от водителя - остановок на туалет не будет, берите памперсы !
            </Typography>
        </Grid>
    );
}


function PlaceSelection(props) {
    return (
        <Box style={{marginBottom: 30}}>
            {/* style={{color: "#91B3FA"}}*/}
            <Typography align={"left"}>
                Выберите места
            </Typography>
        </Box>
    );
}

function BillingMethod (props) {
    let classes = useBillingStyles();
    return (
        <Grid container direction={"column"}>
            <Typography align={"left"} style={{marginBottom: 20}}>
                Способ оплаты
            </Typography>

            <Grid item xs={12}>
                <Grid container justify={"space-around"} direction={"row"} >


                    {/* оплата наличными */}
                    <Grid item xs={3} className={classes.billingMethod}>
                        <Grid container direction={"column"}>
                            <Typography>
                                Наличные
                            </Typography>
                            <img src={MoneySVG}/>
                            <Checkbox checked={true}/>

                        </Grid>
                    </Grid>

                    {/* оплата картой */}
                    <Grid item xs={3} className={classes.billingMethod}>
                        <Grid container direction={"column"}>
                            <Typography>
                                Картой
                            </Typography>
                            <img src={CardSVG}/>
                            <Checkbox checked={false}/>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

export function ObserveTrip () {
    let classes = useCardStyles();
    // для скроллера фотографий
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
    let comments = [1, 2, 3, 4]

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Box>
            <Header/>
            <Container style={{marginTop: 30}}>

                {/* top bar */}

                <Avatar src={AvatarDemo}
                        style={{
                            marginBottom: 20,
                            height: theme.spacing(10),
                            width: theme.spacing(10)
                        }}
                />

                <Grid container
                      style={{
                          position: "relative",
                          marginBottom: 20
                      }}>
                    <Typography align="left">
                        Elon Mask - 49 лет
                    </Typography>

                    <Box style={{position: "absolute", right: 0}}>
                        2,9
                        <img src={starSVG} style={{position: "relative", top: "3px", height: "15px"}}/>
                    </Box>
                </Grid>

                <Grid container style={{marginBottom: 30}}>
                    <Typography variant={"caption"} align={"left"}>
                        3 свободных места
                    </Typography>
                </Grid>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}>
                        Маршрут
                    </AccordionSummary>

                    <AccordionDetails>


                        <Timeline align="right">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Москва</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Сочи</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Владив<br/>осток</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>Стокго<br/>льм</TimelineContent>
                            </TimelineItem>
                        </Timeline>
                        {/*  маршрут  */}

                    </AccordionDetails>
                </Accordion>


                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}>
                        Авто
                    </AccordionSummary>

                    <AccordionDetails>

                        <Container>
                            {/*  про автомобиль  */}
                            <Grid container class={classes.aboutCar}>
                                <Typography align="left" className={classes.aboutCarSecondaryText}>
                                    Модель
                                </Typography>

                                <Typography align="left" className={classes.aboutCarSecondaryText}>
                                    Комфорт
                                </Typography>

                                <Typography align="left" className={classes.aboutCarSecondaryText}>
                                    Цвет
                                </Typography>
                            </Grid>

                            {/*  тут фотки автомобиля  */}
                            <div className={classes.root}>
                                <Paper square elevation={0} className={classes.header}>
                                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                                </Paper>
                                <img
                                    className={classes.img}
                                    src={tutorialSteps[activeStep].imgPath}
                                    alt={tutorialSteps[activeStep].label}
                                />
                                <MobileStepper
                                    steps={maxSteps}
                                    position="static"
                                    variant="text"
                                    activeStep={activeStep}
                                    nextButton={
                                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                            Next
                                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                        </Button>
                                    }
                                    backButton={
                                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                            Back
                                        </Button>
                                    }
                                />
                            </div>

                        </Container>

                    </AccordionDetails>
                </Accordion>

                <Accordion style={{marginBottom: 30}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        Отзывы
                    </AccordionSummary>

                    <AccordionDetails>
                        <Container>
                            {comments.map(comment => <Comment {...comment}/>)}
                        </Container>
                    </AccordionDetails>
                </Accordion>

                {/*  сообщение от водителя  */}
                <DriverMessage/>

                <PlaceSelection/>

                {/*  способ оплаты  */}
                <BillingMethod/>

                <Grid container justify={"space-around"} style={{marginBottom: "30px", marginTop: "30px"}}>
                    <Button variant="contained" color="primary">
                        назад
                    </Button>

                    <Button variant="contained" color="primary">
                        выбрать водителем
                    </Button>
                </Grid>
            </Container>
        </Box>
    );
}