import {Avatar, Box, Grid, makeStyles, TextareaAutosize, Typography} from "@material-ui/core";
import {Header} from "../components/Header";
import { Nav } from '../components/Nav';
import mapboxgl from 'mapbox-gl';
import {useEffect, useRef, useState} from "react"; // eslint-disable-line import/no-webpack-loader-syntax
//images
import test_img from "../../images/avatar.png";
//icons
import MsgSvg from "../../icons/message.svg";
import PhoneSvg from "../../icons/ring.svg";
import {ArrowDropDownSharp} from "@material-ui/icons";

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import MapboxClient from 'mapbox'
import {useTheme} from "@material-ui/core/styles";

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
        zIndex: 1000,
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


export function MapPage (props) {
    let classes = useMapStyles();

    const mapContainer = useRef(null);
    const map = useRef(null);
    const theme = useTheme();

    // TODO:
    //   нам приходят названия городов
    //   мы при помощи сторонней API находим координаты места
    //   размечаем маршрут и добавляем его в mapbox

    const breakpoints_data = [];

    let [currectSelection, setCurrectSelection] = useState(false);

    // стандартная позиция на карте
    const [defaultLng, setLng] = useState(-70.9);
    const [defaultLat, setLat] = useState(42.35);

    const [zoom, setZoom] = useState(9);

    // данные для поля from
    const [lng1, setLng1] = useState();
    const [lat1, setLat1] = useState();

    // данные для поля to
    const [lng2, setLng2] = useState();
    const [lat2, setLat2] = useState();

    const [showReason, setShowReason] = useState(false);


    const [showDropdown, setShowDropdown] = useState(false);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [defaultLng, defaultLat],
            zoom: zoom
        });


        // добавляем directions плагин
        map.current.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );

        let client = new MapboxClient(mapboxgl.accessToken);
        // console.log(client)

        function success(pos) {
            var crd = pos.coords;
          
            console.log('Ваше текущее местоположение:');
            console.log(`Широта: ${crd.latitude}`);
            console.log(`Долгота: ${crd.longitude}`);
            console.log(`Плюс-минус ${crd.accuracy} метров.`);
          };

        console.log(navigator.geolocation.getCurrentPosition(success))

        // let controls = document.querySelector(".mapbox-directions-component mapbox-directions-inputs");
        // console.log(controls);
        // https://api.mapbox.com/directions/v5/mapbox/driving-traffic/-71.026897%2C42.299757%3B-71.13895263672124%2C42.02438629001665.json?geometries=polyline&steps=true&overview=full&language=en&access_token=pk.eyJ1IjoibjBubGluZXIiLCJhIjoiY2txNmNmN3BvMWJ1NzJwb2M1czc3ZWZ6NSJ9.860SgUxyGaAWIGja2sOugw

        // работа с нажатиями
        map.current.on('click', function(e) {
            // TODO: добавить установку места
        });

    });


    return (
        <Box>
            {/* controls */}
            <Grid container
                  direction={"column"}
                  style={{
                      position: "fixed",
                      zIndex: 999,
                      width: 200,
                      marginTop: 30,
                      marginLeft: 30
                  }}>
            </Grid>

            <div ref={mapContainer} className={classes.map}  />


            <Grid container direction={"row"} className={`${classes.topbar} pathTopbar`}>

                <Grid item xs={6} direction={"row"} justify={"space-between"} style={{position: "relative"}}>
                    <Avatar src={test_img}/>
                    <img src={PhoneSvg} style={{position: "absolute", top: 7, left: 50}}/>
                    <img src={MsgSvg} style={{position: "absolute", top: 7, left: 90, color: "#294367"}}/>
                </Grid>

                <Grid item derection={"column"} xs={6}>
                    <Typography align="left"
                                // className={}
                                className={"cascfwf"}
                                style={{
                                    // fontSize: "9px",
                                    fontSize: 10,
                                    lineHeight: "11px"
                                }}>
                        машина: Lada ведро
                    </Typography>
                    <Typography align="left"
                                className={"cascfwf"}
                                style={{
                                    fontSize: 10,
                                    lineHeight: "11px"
                                }}>
                        номер: x220вт
                    </Typography>
                    <Typography align="left"
                                className={"cascfwf"}
                                style={{
                                    fontSize: 10,
                                    lineHeight: "11px"
                                }}>
                        цвет авто: белый
                    </Typography>
                    <Typography align="left"
                                className={"cascfwf"}
                                style={{
                                    fontSize: "9px",
                                    lineHeight: "11px"
                                }}>
                        водитель: Генадий Горин
                    </Typography>
                </Grid>
            </Grid>

            <Grid container style={{
                position: "fixed",
                bottom: showDropdown ? 0 : -140,
                transition: "0.4s",


                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "5px 5px 0px 0px",

                height: 170,
                width: "100%",
                zIndex: 1000
            }}>
                <Grid item xs={12} onClick={(e)=>setShowDropdown(!showDropdown)}>
                    <ArrowDropDownSharp style={{
                        transform: showDropdown ? "rotate(180deg)" : "",
                        transition: "0.4s"
                    }}/>
                </Grid>

                <Grid item xs={12}>

                    <Typography align={"center"} variant={"h6"}>
                        <b>
                            Водитель подъедет в
                        </b>
                    </Typography>

                    <Typography align={"center"} variant={"h5"} style={{color: "#797979"}}>
                        <b>
                            12:30
                        </b>
                    </Typography>

                    <Grid container justify={"center"}
                        style={{
                            position: "absolute",
                            top: -50,
                            display: showReason ? "block" : "none",
                        }}
                    >
                        <TextareaAutosize
                            placeholder={"Напишите причину отмены поездки"}
                            style={{
                                padding: 5,
                                height: 150,
                                width: 150,
                                border: "none",
                                borderRadius: 5,
                                boxShadow: "0px 0px 7px 3px rgba(0, 0, 0, 0.25)",
                                color: "#868686"
                            }}
                        />

                    </Grid>

                    <Grid item style={{
                        background: "#294367",
                        borderRadius: 50,
                        color: "white",
                        padding: "7px 20px",
                        width: 200,
                        margin: "20px auto"
                    }}
                    onClick={()=>setShowReason(!showReason)}>
                        отменить поездку
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    );
}