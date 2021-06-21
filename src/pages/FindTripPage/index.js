import React from "react";

import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Card,
    Container,
    createStyles,
    Grid,
    makeStyles, MobileStepper, Paper,
    TextField,
    Typography, useTheme
} from "@material-ui/core";
import {Header} from "../components/Header";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@material-ui/lab";

// icons
import CheapSVG from "../../icons/Component 69.svg";
import RestingSvg from "../../icons/resting.svg";
import PeopleCarrier from "../../icons/people-carrier.svg";
import BusSVG from "../../icons/bus.svg";
import DeliverySVG from "../../icons/delivery.svg";
import BoxSVG from "../../icons/box.svg";
import SubSVG from "../../icons/substract.svg";
import addSvg from "../../icons/add.svg";
import starSVG from "../../icons/star.svg";
// images
import AvatarDemo from "../../images/avatar.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
// import {} from "@material-ui/icons";




let useFromToStyles = makeStyles(theme => ({
    fromToInput: {
        width: "calc(100% - 20px)",
        height: "40px",
        backgroundColor: "#EAEAEA",
        marginBottom: 10,
        color: "#6F6F6F",
        border: "none",
        borderRadius: 100,
        paddingLeft: 20
    }
}));


let useTripSelectionStyles = makeStyles(theme => ({
    tripTypeButton: {
        width: 70,
        height: 40,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    }
}));


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


function TripTypeButton ({src, title}) {
    let classes = useTripSelectionStyles();

    return (
        <Grid item xs={3} style={{margin: 5}}>
            <Box className={classes.tripTypeButton}>
                <img src={src}/>
            </Box>
            <Typography variant={"caption"}>
                {title}
            </Typography>
        </Grid>
    );
}

function SelectTripType (props) {
    return (
        <Container xs={"sm"}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container direction={"row"} justify={"center"}>
                        <TripTypeButton src={CheapSVG} title={"Эконом"}/>
                        <TripTypeButton src={RestingSvg} title={"Комфорт"}/>
                        <TripTypeButton src={PeopleCarrier} title={"Минимвен"}/>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container direction={"row"} justify={"center"}>
                        <TripTypeButton src={BusSVG} title={"Автобус"}/>
                        <TripTypeButton src={DeliverySVG} title={"Грузовые"}/>
                        <TripTypeButton src={BoxSVG} title={"Посылки"}/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

function FromTo (props) {
    let classes = useFromToStyles();

    return (
        <Grid container direction={"column"}>
            <input placeholder={"откуда"} className={classes.fromToInput}/>
            <input placeholder={"куда"} className={classes.fromToInput}/>
        </Grid>
    );
}

function PlacesAndDate (props) {
    return (
        <Box style={{marginTop: 20}}>
            <Container>
                    <Grid container direction={"column"}>
                        <Typography align="center">
                            кол-во мест: 2
                        </Typography>

                        <Grid container justify={"center"}>
                            {/* кнопка минус */}
                            <div style={{
                                display: "grid",
                                placeContent: "center",
                                // boxShadow: "0 0 7px 7px rgba(0, 0, 0, 0.1)",
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                borderRadius: 100,
                                height: 25,
                                width: 25,
                                marginRight: 10
                            }}>
                                <img src={SubSVG}/>
                            </div>

                            {/* кнопка плюс */}
                            <div style={{
                                display: "grid",
                                placeContent: "center",
                                // boxShadow: "0 0 7px 7px rgba(0, 0, 0, 0.1)",
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                borderRadius: 100,
                                height: 25,
                                width: 25
                            }}>
                                <img src={addSvg}/>
                            </div>
                        </Grid>
                    </Grid>

                <TextField type={"datetime-local"}/>

            </Container>

        </Box>
    );
}

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


function TripCard (props) {
    let classes = useCardStyles();
    // для скроллера фотографий
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Card style={{marginTop: "40px"}}>
            <Container>

                {/* top bar */}

                <Avatar src={AvatarDemo}
                        style={{
                            marginBottom: 20
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


                <Accordion style={{marginBottom: 30}}>
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

            </Container>
        </Card>
    );
}

function TripCards (props) {
    let cards = [1, 2, 3, 4]
    return (
        <Box>
            {cards.map(card => <TripCard {...card}/>)}
        </Box>
    );
}

export function FindTripPage (props) {
    return (
            <Box>
                <Header/>
                <Container style={{marginTop: "20px", marginBottom: "20px"}}>
                    <FromTo/>
                    <SelectTripType/>
                    <PlacesAndDate/>
                    <TripCards/>
                </Container>
            </Box>
        );
}