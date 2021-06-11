import {Card, Container, makeStyles} from "@material-ui/core";
import {Header} from "../components/Header";
import {Nav} from "../components/Nav";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {CarCard} from "./CarCard";
import {AppendCar} from "./AppendCar";



const usePersonalAreaStyles = makeStyles(theme=>({
    page: {
        backgroundColor: "white",
        minHeight: "100vh",
        width: "100vw",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


function Cars (props) {
    /* автомобили */
    let classes = usePersonalAreaStyles();
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Автомобили</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/* тут показываются автомобили юзера */}
                <CarCard/>
                <AppendCar/>
            </AccordionDetails>
        </Accordion>
);
}


function AboutMe (props) {
    let classes = usePersonalAreaStyles();

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>О себе</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/* тут показываются автомобили юзера */}
                {/*    TODO: вёрстка блока "о себе"*/}
            </AccordionDetails>
        </Accordion>
    );
}


export function PersonalArea (props) {
    let classes = usePersonalAreaStyles();
    return (
        <div className={classes.page}>
            <Header/>

            <Container xs={"md"} style={{marginTop: 20}}>
                <Cars/>
                <AboutMe/>
            </Container>

        </div>
    );
}