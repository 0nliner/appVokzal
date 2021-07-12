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

const aboutUseStyles = makeStyles(theme => ({

}))

const About = () => {
    const classes = aboutUseStyles();
    return (
        <Container className={classes.root}>
            <Container className></Container>
        </Container>
    )
}



export const ObserveTrip = (props) => {
    
    return (
        <Container>
            <Header />
        </Container>
    )
}