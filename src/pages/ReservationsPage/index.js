import {Avatar, Box, Card, Container, Grid, Typography} from "@material-ui/core";
import {Header} from "../components/Header";
import AvatarDemo from "../../images/avatar.png";


function Reservation (props) {
    return (
        <Card style={{marginTop: 25}}>
            <Grid container>
                <Grid item xs={3} align={"center"} justifyContent={"center"}>
                    <Avatar src={AvatarDemo}/>
                </Grid>

                <Grid item xs={9} direction={"column"}>
                    <Typography style={{color: "#91B3FA", fontSize: "17px"}} align={"left"}>
                        {props.name}
                    </Typography>
                    <Container style={{margin: 0,padding: 0, display: "flex",justifyContent: "flex-start", opacity: "0.8" }}>
                        <Typography  variant="caption" align="left">
                        {props.date}
                        </Typography>
                        <Typography style={{paddingLeft: 10}} variant="caption" align="left">
                        {props.time}
                        </Typography>
                    </Container>
                    <Typography variant="body2" align={"left"}>
                        {props.route}
                    </Typography>
                    <Typography variant="body2" style={{marginTop: 5, marginBottom: 5}} align={"left"}>
                        {props.payment}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
}

export function ReservationsPage (props) {
    const data = [
        {
            name: "Александр",
            date: "10.10.2021",
            time: "19:37",
            route: "Казань - Москва",
            payment: "Наличные"
        },
        {
            name: "Владислав",
            date: "16.10.2021",
            time: "08:30",
            route: "Москва - Санкт Петербург",
            payment: "Наличные"
        },
        {
            name: "Татьяна",
            date: "02.10.2021",
            time: "10:00",
            route: "Уфа - Сочи",
            payment: "Безналичный расчет"
        },
        {
            name: "Ольга",
            date: "08.10.2021",
            time: "06:00",
            route: "Сургут - Архангельск",
            payment: "Безналичный расчет"
        },
    ]
    return (
        <Box>
            <Header/>
            <Container>
                {data.map(reservation => <Reservation {...reservation}/>)}
            </Container>
        </Box>
    );
}