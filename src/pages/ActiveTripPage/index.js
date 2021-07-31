import {Avatar, Box, Grid, makeStyles, TextareaAutosize, TextField, Typography} from "@material-ui/core";
import {Header} from "../components/Header";
import { Nav } from '../components/Nav';
import mapboxgl from 'mapbox-gl';
import {useEffect, useRef, useState} from "react"; // eslint-disable-line import/no-webpack-loader-syntax
import Rating from '@material-ui/lab/Rating';
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
        minHeight: "48px",
        zIndex: 1000,
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
            setShowDropdown(!showDropdown);
        });

    });


    return (
        <Box>
            {/*<Header/>*/}
            {/* topbar */}
            <Grid container direction={"column"} className={`${classes.topbar} pathTopbar`}>

                <Grid container direction={"row"}>
                    <Grid item derection={"column"} xs={8} alignItems={"center"}>
                        <Typography align="left"
                                    className={"cascfwf"}
                                    style={{
                                        fontSize: "9px",
                                        lineHeight: "11px",
                                        marginTop: 5
                                    }}>
                            время в пути: 1:32
                        </Typography>
                        <Typography align="left"
                                    className={"cascfwf"}
                                    style={{
                                        fontSize: "9px",
                                        lineHeight: "11px"
                                    }}>
                            осталось: 32км (30 минут)
                        </Typography>
                        <Typography align="left"
                                    className={"cascfwf"}
                                    style={{
                                        fontSize: "9px",
                                        lineHeight: "11px"
                                    }}>
                            пройдено: 50км
                        </Typography>
                    </Grid>

                    <Grid item xs={4} justify={"center"} alignItems={"center"} style={{display: "flex"}}>
                        <Grid item>
                            <Typography align={"center"}>
                                <b>
                                    124 км/ч
                                </b>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>


                <Box container style={{
                    display: showDropdown ? "block" : "none"
                }}>
                    <Typography align="left" style={{marginTop:10}}>
                        Создать метку
                    </Typography>

                    <Grid container direction={"row"} justify={"space-between"} style={{marginBottom: 15}}>
                        <Grid item xs={5}>
                            <TextField label={"название места"}/>
                        </Grid>

                        <Grid item xs={5}>
                            {/* TODO: добавить дропдаун */}
                            <TextField label={"Тип места"}/>
                        </Grid>
                    </Grid>

                    <Typography align="left">
                        оцените место
                    </Typography>
                    <Grid container justify={"left"}>
                        <Rating
                            name="hover-feedback"
                            value={5.0}
                            precision={0.5}
                            size={"small"}
                        />
                    </Grid>

                    <Grid conteiner justify={"center"} style={{display: "flex"}}>
                        <Grid item style={{
                            background: "#F9F9F9",
                            border: "1px dashed #294367",
                            boxShadow: "0px 0px 7px 1px rgba(0, 0, 0, 0.25)",
                            borderRadius: 3,
                            width: 109,
                            height: 78,
                            alignItems: "center",
                            display: "grid",
                            placeContent: "center"
                        }}
                              // alignItems={"center"}
                        >
                            <Typography variant="caption" style={{color: "#294367"}}>
                                Добавить фото
                            </Typography>
                        </Grid>
                    </Grid>

                    <TextareaAutosize placeholder={"описание места"}
                        style={{
                            width: 222,
                            height: 60,
                            marginTop: 10,

                            background: "#FFFFFF",
                            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
                            borderRadius: 3,
                            border: "none"
                        }}
                    />

                    <Box style={{
                        width: 107,
                        height: 19,
                        color: "white",
                        background: "#294367",
                        borderRadius: 48,
                        padding: "2px 10px",
                        margin: "20px auto"
                    }} onClick={()=>setShowDropdown(false)}>
                        создать метку
                    </Box>
                    </Box>

            </Grid>

            <div ref={mapContainer} className={classes.map}  />
        </Box>
    );
}