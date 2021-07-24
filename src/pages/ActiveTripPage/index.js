import {Avatar, Box, Grid, makeStyles, Typography} from "@material-ui/core";
import {Header} from "../components/Header";
import { Nav } from '../components/Nav';
import mapboxgl from 'mapbox-gl';
import {useEffect, useRef, useState} from "react"; // eslint-disable-line import/no-webpack-loader-syntax
//images
import test_img from "../../images/avatar.png";
//icons
import MsgSvg from "../../icons/message.svg";
import PhoneSvg from "../../icons/ring.svg";
import {ArrowDownwardSharp, ArrowDropDownSharp} from "@material-ui/icons";



mapboxgl.accessToken = "pk.eyJ1IjoibjBubGluZXIiLCJhIjoiY2txNmNmN3BvMWJ1NzJwb2M1czc3ZWZ6NSJ9.860SgUxyGaAWIGja2sOugw";


let useMapStyles = makeStyles(theme => ({
    map: {
        height: "100vh"
    },
    input: {
        backgroundColor: "#F2F2F2",
        color: "#6C6C6C",
        paddingLeft: 20,
        width: "calc(100% - 20px)",
        height: 35,
        border: "none",
        borderRadius: 10
    },
    nav: {
        width: 80,
        position: "absolute",
        top: 10
    },
    topbar: {
        position: "fixed",
        top: 0,
        height: "48px",
        // width: "calc(100% - 20px )",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "0px 0px 30px 30px",
        padding: "2px 10px"
    }

}));


export function ActiveTripPage (props) {
    let classes = useMapStyles();

    const mapContainer = useRef(null);
    const map = useRef(null);

    let [currectSelection, setCurrectSelection] = useState(false);

    // стандартная позиция на карте
    const [defaultLng, setLng] = useState(-70.9);
    const [defaultLat, setLat] = useState(42.35);

    const [zoom, setZoom] = useState(9);

    const [showDropdown, setShowDropdown] = useState(false);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [defaultLng, defaultLat],
            zoom: zoom
        });

        map.current.on('click', function(e) {
            console.log("click");
        });

    });


    return (
        <Box>
            {/*<Header/>*/}
            {/* topbar */}
            <Grid container direction={"row"} className={classes.topbar}>

                {/*<Grid item xs={6} direction={"row"} justify={"space-between"} style={{position: "relative"}}>*/}
                {/*    <img src={PhoneSvg} style={{position: "absolute", top: 7, left: 50}}/>*/}
                {/*    <img src={MsgSvg} style={{position: "absolute", top: 7, left: 90, color: "#294367"}}/>*/}
                {/*</Grid>*/}

                <Grid item derection={"column"} xs={8} alignItems={"center"}>
                    <Typography align="left"
                                style={{
                                    fontSize: "9px",
                                    lineHeight: "11px",
                                    marginTop: 5
                                }}>
                        время в пути: 1:32
                    </Typography>
                    <Typography align="left"
                                style={{
                                    fontSize: "9px",
                                    lineHeight: "11px"
                                }}>
                        осталось: 32км (30 минут)
                    </Typography>
                    <Typography align="left"
                                style={{
                                    fontSize: "9px",
                                    lineHeight: "11px"
                                }}>
                        пройдено: 50км
                    </Typography>
                </Grid>

                <Grid item xs={4} justify={"center"} alignItems={"center"}>
                        <Grid item>
                            <Typography align={"center"}>
                                <b>
                                    124 км/ч
                                </b>
                            </Typography>
                        </Grid>
                </Grid>


            </Grid>

            <div ref={mapContainer} className={classes.map}  />
        </Box>
    );
}