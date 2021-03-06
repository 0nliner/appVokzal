import {Header} from "../components/Header";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Button,
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
import MediaQuery from 'react-responsive'
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
        width: theme.spacing(11),
        height: theme.spacing(11),
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
    ruleIcon2: {
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        background: "#E8E8E8",
        marginLeft: 10
    },
    containerPlace: {
        display: "flex",
        justifyContent: "center",
        width: "80%",
        flexDirection: "column"
    },
    accardionCards: {
        display: "flex",
        flexDirection: "column",
        boxShadow: "none"
    },
    btn: {
        backgroundColor: "rgba(41, 67, 103, 1)",
        color: "rgba(255, 255, 255, 1)",
        fontSize: "12px",
        textTransform: "none",
        width: "60%"
    }

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
            author: "?????????????????? ????????",
            raiting: 3.4,
            text: "?????? ??????????????, ?????????????? ?????? ??????????????????????. ???????? ???????? ?? ?????????????? ????????????."
          },
          {
            author: "?????????? ????????????",
            raiting: 4.0,
            text: "?????? ??????????????, ?????????????? ?????? ??????????????????????. ???????? ???????? ?? ?????????????? ????????????."
          },
          {
            author: "???????????????? ??????????????",
            raiting: 2.9,
            text: "?????? ??????????????, ?????????????? ?????? ??????????????????????. ???????? ???????? ?? ?????????????? ????????????."
          },
          {
            author: "?????????????????? ????????????????",
            raiting: 5.0,
            text: "?????? ??????????????, ?????????????? ?????? ??????????????????????. ???????? ???????? ?? ?????????????? ????????????."
          }
    ];

    return (
        <Box>
            <Header/>
            <Container xs={"md"}>
                <Grid container>
                    {/* ???????????? ??????????*/}
                    <Grid item xs={4}>
                        <Avatar className={classes.large} src={AvatarDemo} style={{marginTop: 20}}/>
                    </Grid>

                    <Grid item xs={8} style={{paddingLeft: 10}}>
                        <Grid container style={{marginTop: 20}} direction={"column"}>
                            <Typography style={{color: "#294367",
                                                fontSize: 14}}
                                        align={"left"}>
                                <b>
                                    ???????????????????? - 20 ??????
                                </b>
                            </Typography>
                            {/* ?????????????? ??????????*/}
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small"/>
                        </Grid>

                        <Grid container direction={"column"}>
                            <Typography style={{fontSize: "13px"}} align={"left"} variant={"caption"}>
                                ??????????????: <span style={{color: "#757575"}}>???????????? - ??????</span>
                            </Typography>

                            <Typography style={{fontSize: "12px"}} align={"left"} variant={"caption"}>
                                ??????????????: <span style={{color: "#757575"}}>+7(999)-999-99-99</span>
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
                            <Typography align={"left"}>?? ????????</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography align={"left"} style={{color: "#757575"}}>
                                ???????????????? ?????????????????? (??????. Albert Einstein, ?????? [??alb??t ??a????n??ta????n] ???????????????????? ?? ?????????? ??????????????[C 1]; 14 ?????????? 1879, ????????, ?????????????????????? ????????????????????, ???????????????? ??? 18 ???????????? 1955, ????????????????, ??????-????????????, ??????) ??? ??????????-????????????????, ???????? ???? ?????????????????????? ?????????????????????? ?????????????????????????? ????????????, ?????????????? ?????????????????????? ???????????? ???? ???????????? 1921 ????????, ???????????????????????? ??????????????-????????????????. ?????? ?? ???????????????? (1879???1893, 1914???1933), ???????????? ?? ???????????????? ?? ???????????? ???????????????? ?????? ???????????????? ???????????????????????? ?? ?????? ?????????? ??????????????????????; ?????????????????? (1893???1914), ?? ?? 1933 ???????? ???? ?????????? ?????????? ??? ?? ??????.

                                ???????????????? ???????????? ?????????? 20 ?????????????? ?????????????????????????? ????????, ???????? ???????????? ???????????????? ????????, ?? ?????? ?????????? ?????????????????????? ???????????????? ???????? ???? ????????
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/*, marginBottom: 30 */}
                    <Accordion style={{width: "100%"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}>
                            <Typography align={"left"}>??????????????</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Grid style={{width: "100%",display: "flex", justifyContent: "center", alignItems: "center",}} container>
                                <Grid className={classes.containerPlace}>
                                    <Places/>
                                    <Container style={{display: "flex", justifyContent: "space-between", width: "110%", padding: 0,marginLeft: -15, marginTop: 20, paddingBottom: 20, alignItems: "center"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                  <div style={{width: 10, height: 10, borderRadius: "50%", backgroundColor: "#757575"}}></div>
                  <Typography style={{fontSize: "8px", marginLeft: 3}} variant={"caption"}>?????????????????? ??????????</Typography>
                </div>
                <div style={{display: "flex", marginLeft: 3,alignItems: "center"}}>
                  <div style={{width: 10, height: 10, borderRadius: "50%", backgroundColor: "#27AE60"}}></div>
                  <Typography style={{fontSize: "8px", marginLeft: 3}} variant={"caption"}>?????????????????????????????? ??????????</Typography>
                </div>
                <div style={{display: "flex", marginLeft: 3,alignItems: "center"}}>
                  <div style={{width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EB5757"}}></div>
                  <Typography style={{fontSize: "8px", marginLeft: 3}} variant={"caption"}>????????????????????</Typography>
                </div>

              </Container>
                                </Grid>
                                
                            </Grid>
                        </AccordionDetails>
                    </Accordion>

                    {/*  ????????????  */}
                    <Accordion style={{width: "100%"}}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography align={"left"}>
                                ????????????
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accardionCards}>

                            {reviews.map(review_data => <Review {...review_data}/>)}

                        </AccordionDetails>
                    </Accordion>


                    <Grid container justify="center" style={{marginBottom: 40}}>
                        <Grid item className={classes.conditions}>
                            <div className={classes.icons}>
                                <MediaQuery maxWidth={373}>
                                <div className={classes.ruleIcon}><img src={baby} /></div>
                                <div className={classes.ruleIcon}><img src={smoke} /></div>
                                <div className={classes.ruleIcon}><img src={dog} /></div>
                                <div className={classes.ruleIcon}><img src={song} /></div>
                                <div className={classes.ruleIcon}><img src={pocket} /></div>
                                </MediaQuery>
                                <MediaQuery minWidth={374}>
                                <div className={classes.ruleIcon2}><img src={baby} /></div>
                                <div className={classes.ruleIcon2}><img src={smoke} /></div>
                                <div className={classes.ruleIcon2}><img src={dog} /></div>
                                <div className={classes.ruleIcon2}><img src={song} /></div>
                                <div className={classes.ruleIcon2}><img src={pocket} /></div>
                                </MediaQuery>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{width: "100%", display: "flex", justifyContent: "flex-end", paddingBottom: 30}}>
                    <Button className={classes.btn} variant={"contained"} color={"primary"}>?????????????? ??????????????</Button>
                    </div>
                </Grid>
            </Container>
        </Box>);
}