import {Box, Card, Container, Grid, Typography} from "@material-ui/core";
import {Header} from "../components/Header";
// icons
import ArrowSVG from "../../icons/arrow.svg";
import BasketSVG from "../../icons/basket.svg";
import PenSVG from "../../icons/Pen.svg";



function Trip (props) {
    return (
        <Grid item style={{marginTop: 20, position: "relative"}}>
            <div style={{position: "absolute", right: 5, top: 5}}>
                <img src={PenSVG}/>
            </div>
            <Card>
                <Container>
                    <Grid container direction={"column"}>
                        {/*  верхняя строка */}
                        <Grid item xs={"12"} style={{marginTop: 10}}>
                            <Typography variant={"h6"} align={"left"}>
                                Сочи
                            </Typography>
                        </Grid>

                        <Grid item xs={"12"} align={"left"}>
                            <img src={ArrowSVG} style={{transform: "rotate(90deg)"}}/>
                        </Grid>

                        <Grid item>
                            <Typography variant={"h6"} align={"left"}>
                                Сантк-Петербург
                            </Typography>
                        </Grid>

                        <Typography align={"left"}>
                            дата:
                        </Typography>

                        <Typography align={"left"}>
                            время:
                        </Typography>

                        <Typography align={"left"}>
                            места:
                        </Typography>

                        {/* обратная дорога*/}
                        <Typography variant={"h5"} align={"left"} style={{color: "#91B3FA", marginTop: 20}}>
                            обратно
                        </Typography>

                        <Grid item xs={"12"} style={{marginTop: 10}}>
                            <Typography variant={"h6"} align={"left"}>
                                Сантк-Петербург
                            </Typography>
                        </Grid>

                        <Grid item xs={"12"} align={"left"}>
                            <img src={ArrowSVG} style={{transform: "rotate(90deg)"}}/>
                        </Grid>

                        <Grid item>
                            <Typography variant={"h6"} align={"left"}>
                                Сочи
                            </Typography>
                        </Grid>

                        <Typography align={"left"}>
                            дата:
                        </Typography>

                        <Typography align={"left"}>
                            время:
                        </Typography>

                        <Typography align={"left"}>
                            места:
                        </Typography>



                    </Grid>
                </Container>
            </Card>
        </Grid>
    );
}

function Trips (props) {
    let trips = [
        {
            id: "0",
            from: "name",
            to: "name",
            price: "1000",
            date: "10.08.2021",
            places: "4",

            backId: "1",
            backFrom: "name",
            backTo: "name",
            backPrice: "1000",
            backDate: "10.08.2021",
            backPlaces: "4"
        },
        2
    ];
    return (
        <Container>
            <Grid container xs={"md"} direction={"column"}>
                {trips.map(trip => <Trip {...trip}/>)}
            </Grid>
        </Container>
    );
}

export function TripsPage (props) {
    return (
      <Box className={"TripsPage"}>
          <Header/>
          <Trips/>
      </Box>
    );
}