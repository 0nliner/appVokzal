import {Header} from "../components/Header";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Container, FormControl,
    Grid, InputLabel,
    makeStyles, MenuItem, Select,
    Typography
} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
// images
import AvatarDemo from "../../images/avatar.png";
// icons
import RingSVG from  "../../icons/ring.svg";
import MessageSVG from  "../../icons/chat.svg";
import smsSVG from  "../../icons/SMS.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Places} from "../components/Places";
import {Review} from "../components/Review";

import baby from "../../icons/baby.svg";
import smoke from "../../icons/smoke.svg";
import dog from "../../icons/dog.svg";
import song from "../../icons/song.svg";
import pocket from "../../icons/pocket.svg";
import React from "react";


const useStyles = makeStyles((theme) => ({
    // large: {
    //     width: theme.spacing(12),
    //     height: theme.spacing(12),
    //     margin: "auto"
    // },
    icon: {
        width: "50px",
        height: "50px",
        boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "100px",
        display: "grid",
        placeContent: "center",
        margin: "10px",
        marginTop: "20px"
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
    ruleIcon: {
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        background: "#E8E8E8",
        marginLeft: 10
    },

}));


function Icon({src}) {
    let classes = useStyles();
    // let differentClasses = aboutUseStyles();

    return (
        <div className={classes.icon}>
            <img src={src}/>
        </div>
    );
}

export function AccountPage (props) {
    let classes = useStyles();
    let reviews = [
        {
            raiting: 3.9,
            text: "Тестовый текст",
            author: "Гоша Пирожочник"
        }
    ];

    return (
        <Box>
            <Header/>
            <Container xs={"md"}>
                <Grid container>
                    {/* иконка юзера*/}
                    <Grid item xs={4}>
                        <Avatar className={classes.large} src={AvatarDemo} style={{marginTop: 20}}/>
                    </Grid>

                    <Grid item xs={8} style={{paddingLeft: 10}}>
                        <Grid container style={{marginTop: 20}} direction={"column"}>
                            <Typography style={{color: "#294367",
                                                fontSize: 13}}
                                        align={"left"}>
                                <b>
                                    Бонгобонго - 20 лет
                                </b>
                            </Typography>
                            {/* рейтинг юзера*/}
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small"/>
                        </Grid>

                        <Grid container direction={"column"}>
                            <Typography align={"left"} variant={"caption"}>
                                Маршрут: <span style={{color: "#757575"}}>Казань - спб</span>
                            </Typography>

                            <Typography align={"left"} variant={"caption"}>
                                Телефон: <span style={{color: "#757575"}}>+7(999)-999-99-99</span>
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid container alignItems={"center"} justify={"center"}>
                        <Icon src={RingSVG}/>
                        <Icon src={MessageSVG}/>
                        <Icon src={smsSVG}/>
                    </Grid>

                    <Accordion style={{marginTop: 30}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}>
                            <Typography align={"left"}>О себе</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography align={"left"} style={{color: "#757575"}}>
                                Альбе́рт Эйнште́йн (нем. Albert Einstein, МФА [ˈalbɐt ˈaɪ̯nʃtaɪ̯n] Информация о файле слушать[C 1]; 14 марта 1879, Ульм, Королевство Вюртемберг, Германия — 18 апреля 1955, Принстон, Нью-Джерси, США) — физик-теоретик, один из основателей современной теоретической физики, лауреат Нобелевской премии по физике 1921 года, общественный деятель-гуманист. Жил в Германии (1879—1893, 1914—1933), откуда с приходом к власти нацистов был вынужден эмигрировать и был лишён гражданства; Швейцарии (1893—1914), и с 1933 года до конца жизни — в США.

                                Почётный доктор около 20 ведущих университетов мира, член многих Академий наук, в том числе иностранный почётный член АН СССР
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/*, marginBottom: 30 */}
                    <Accordion style={{width: "100%"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}>
                            <Typography align={"left"}>Посадка</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Grid container>
                                <Grid item justify="center">
                                    <Places/>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>

                    {/*  отзывы  */}
                    <Accordion style={{width: "100%"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography align={"left"}>
                                Отзывы
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            {reviews.map(review_data => <Review {...review_data}/>)}

                        </AccordionDetails>
                    </Accordion>


                    <Grid container justify="center" style={{marginBottom: 40}}>
                        <Grid item className={classes.conditions}>
                            <Typography align="left" variant="body1">Условия поездки:</Typography>
                            <div className={classes.icons}>
                                <div className={classes.ruleIcon}><img src={baby} /></div>
                                <div className={classes.ruleIcon}><img src={smoke} /></div>
                                <div className={classes.ruleIcon}><img src={dog} /></div>
                                <div className={classes.ruleIcon}><img src={song} /></div>
                                <div className={classes.ruleIcon}><img src={pocket} /></div>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </Box>);
}