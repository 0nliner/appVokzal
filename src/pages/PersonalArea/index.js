import {Avatar, Card, Container, Grid, makeStyles} from "@material-ui/core";
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
    profileImg: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    }
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

                <Grid container direction="column">
                    <Grid container className={"top"}>
                        {/* для иконки пользователя*/}
                        <Grid item xs={5}>
                            <Avatar src={"" +
                            "https://sun9-11.userapi.com/impg/0z8B4oCnh4i_qfr_QJ0jwfWGWEP04CoSz-PKQA/ogogeKjx7j8.jpg?size=1280x606&quality=96&sign=84c8b70e57fd1516cf56c18b99114302&type=album" +
                            ""}
                            className={classes.profileImg}/>
                        </Grid>
                        {/* текст о юзере */}
                        <Grid item xs={7}>
                            <Grid container direction="column">
                                <Typography align={"left"}>
                                    <b>Балерина Кардобалета</b>
                                </Typography>

                                <Typography align={"left"} style={{marginTop: 20}}>
                                    документы
                                </Typography>

                                <Typography align={"left"}>
                                    права
                                </Typography>

                                <Typography align={"left"}>
                                    ПТС
                                </Typography>

                                <Typography align={"left"}>
                                    страховка
                                </Typography>

                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid container direction={"column"} style={{marginTop: 40}}>
                        <Typography align={"left"}>
                            Телефон:
                        </Typography>

                        <Typography align={"left"}>
                            Email:
                        </Typography>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>О себе</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography align={"left"}>
                                    Альбе́рт Эйнште́йн (нем. Albert Einstein, МФА [ˈalbɐt ˈaɪ̯nʃtaɪ̯n] Информация о файле слушать[C 1]; 14 марта 1879, Ульм, Королевство Вюртемберг, Германия — 18 апреля 1955, Принстон, Нью-Джерси, США) — физик-теоретик, один из основателей современной теоретической физики, лауреат Нобелевской премии по физике 1921 года, общественный деятель-гуманист. Жил в Германии (1879—1893, 1914—1933), откуда с приходом к власти нацистов был вынужден эмигрировать и был лишён гражданства; Швейцарии (1893—1914), и с 1933 года до конца жизни — в США.

                                    Почётный доктор около 20 ведущих университетов мира, член многих Академий наук, в том числе иностранный почётный член АН СССР
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>
                    <Grid container direction={"column"} style={{marginTop: 40}}>
                        <Typography align={"left"}>Оплата</Typography>
                        <Typography align={"left"}>Полученные отзывы</Typography>
                        <Typography align={"left"}>Оставленные отзывы</Typography>
                        <Typography align={"left"}>Пароль</Typography>
                        <Typography align={"left"}>Оповещение и способы связи</Typography>
                        <Typography align={"left"}>Оценить в App Store</Typography>
                        <Typography align={"left"}>Помощь</Typography>
                        <Typography align={"left"}>Условия использования</Typography>
                        <Typography align={"left"}>Конфиденциальность</Typography>
                        <Typography align={"left"}>Выйти</Typography>
                    </Grid>
                </Grid>
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