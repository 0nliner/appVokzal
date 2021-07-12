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
                    <Typography style={{color: "#91B3FA"}} align={"left"}>
                        Джон
                    </Typography>

                    <Typography style={{marginTop: 5}} align={"left"}>
                        Казань - Санкт-Петербург
                    </Typography>

                    <Typography style={{marginTop: 5, marginBottom: 5}} align={"left"}>
                        Без нал.
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
}

export function ReservationsPage (props) {
    let reservations = [
        1, 2, 3, 4, 5
    ];
    return (
        <Box>
            <Header/>
            <Container>
                {reservations.map(reservation => <Reservation {...reservation}/>)}
            </Container>
        </Box>
    );
}