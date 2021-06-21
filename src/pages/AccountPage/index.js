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
import MessageSVG from  "../../icons/message.svg";
import smsSVG from  "../../icons/SMS.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: "auto"
    },
    icon: {
        width: "50px",
        height: "50px",
        boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "100px",
        display: "grid",
        placeContent: "center",
        margin: "10px",
        marginTop: "20px"
    }
}));

function Icon({src}) {
    let classes = useStyles();

    return (
        <div className={classes.icon}>
            <img src={src}/>
        </div>
    );
}

export function AccountPage (props) {
    let classes = useStyles();

    return (
        <Box>
            <Header/>
            <Container xs={"md"}>
                <Grid container>
                    {/* иконка юзера*/}
                    <Avatar className={classes.large} src={AvatarDemo} style={{marginTop: 20}}/>

                    <Grid container style={{marginTop: 20, marginBottom: 30}} direction={"column"}>
                        <Typography variant={"h6"} style={{color: "#91B3FA"}} align={"left"}>
                            Евгений Аляска
                        </Typography>
                        {/* рейтинг юзера*/}
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </Grid>

                    <Grid container direction={"column"}>
                        <Typography align={"left"}>
                            Маршрут
                        </Typography>

                        <Typography align={"left"}>
                            Телефон
                        </Typography>

                        <Typography align={"left"}>
                            Отзывы
                        </Typography>
                    </Grid>

                    <Grid container alignItems={"center"} justify={"center"}>
                        <Icon src={RingSVG}/>
                        <Icon src={MessageSVG}/>
                        <Icon src={smsSVG}/>
                    </Grid>

                    <Accordion style={{marginTop: 30, marginBottom: 30}}>
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

                    {/* детали поездки */}
                    <Grid container direction={"column"}>
                        {/* с ребёнком */}
                        <Grid item align="left" style={{marginBottom: 10}}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="child">Ребёнок</InputLabel>
                                <Select
                                    labelId="childSelector"
                                    id="child"
                                    value={"с ребёнком"}
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={"с ребёнком"}>с ребёнком</MenuItem>
                                    <MenuItem value={"без ребёнка"}>без ребёнка</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* курящий */}
                        <Grid item align="left" style={{marginBottom: 10}}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="smoking">курящий</InputLabel>
                                <Select
                                    labelId="SmokingSelector"
                                    id="Smoking"
                                    value={"курящий"}
                                    >

                                    <MenuItem value={"курящий"}>курящий</MenuItem>
                                    <MenuItem value={"не курящий"}>не курящий</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* с животным */}
                        <Grid item align="left" style={{marginBottom: 10}}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="pet">С животным</InputLabel>
                                <Select
                                    labelId="PetSelector"
                                    id="Pet"
                                    value={"без животного"}
                                >

                                    <MenuItem value={"с животным"}>с животным</MenuItem>
                                    <MenuItem value={"без животного"}>без животного</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* музыка */}
                        <Grid item align="left" style={{marginBottom: 30}}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="music">Музыка</InputLabel>
                                <Select
                                    labelId="MusicSelector"
                                    id="Music"
                                    value={"люблю музыку"}
                                >

                                    <MenuItem value={"люблю музыку"}>люблю музыку</MenuItem>
                                    <MenuItem value={"не люблю музыку"}>не люблю музыку</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                    </Grid>
                </Grid>
            </Container>
        </Box>);
}