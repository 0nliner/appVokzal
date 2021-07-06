import React from "react";
import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Button,
    Card,
    Container,
    createStyles,
    Grid,
    makeStyles, MobileStepper, Paper,
    TextField,
    Typography, useTheme
} from "@material-ui/core";
import {Header} from "../components/Header";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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

// images
import AvatarDemo from "../../images/avatar.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";




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
        borderRadius: "50%",
        border: "none",
        background: "#FFFFFF",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        "&:active": {
            border: "none",
            color: "black"
        }
    }
}));
const Search = () => {
    const classes = useSearchStyles();
    
    return (
        <Container className={classes.root}>
            <input placeholder="Откуда" type="text" className={classes.input} />
            <input placeholder="Куда" type="text" className={classes.input} />
            <button className={classes.swap}><SwapVertIcon /></button>
        </Container>
    );
}


// --------------------- Service component ----------------


const useServiceStyles = makeStyles( theme => ({
    root: {
        display: "flex",
        marginTop: 50,
        width: "100%",
        paddingBottom: 30,
        
    },
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "9px",
        textTransform: "capitalize"
    }
}))

const Service = () => {
    const classes = useServiceStyles();
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Tabs  variant="scrollable" value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" className={classes.root}>
            
            <Tab className={classes.item} label="Попутчик" icon={<img src={poput} />} />
            <Tab className={classes.item} label="Эконом" icon={<img src={econom} />} />
            <Tab className={classes.item} label="Комфорт" icon={<img src={comfort} />} />
            <Tab className={classes.item} label="Минивэн" icon={<img src={mini} />} />
            <Tab className={classes.item} label="Автобус" icon={<img src={bus} />} />
            <Tab className={classes.item} label="Грузовые" icon={<img src={gruz} />} />
            <Tab className={classes.item} label="Посылки" icon={<img src={delivery} />} />
            <Tab className={classes.item} label="Спецтехника" icon={<img src={special} />} />
        </Tabs>
    )
}

export const FindTripPage = (props) => {
    return (
            <Box>
                <Header/>
                <Container>
                    <Search />
                    <Service />
                </Container>
            </Box>
        );
}