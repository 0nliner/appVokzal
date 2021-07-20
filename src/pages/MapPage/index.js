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


export function MapPage (props) {
    let classes = useMapStyles();

    const mapContainer = useRef(null);
    const map = useRef(null);

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
            // console.log(currectSelection)
            if (currectSelection === "from") {
                setCurrectSelection(false);
                setLng1(e.lngLat.lng);
                setLat1(e.lngLat.lat);
                console.log(1)
            }

            else if (currectSelection === "to") {
                setCurrectSelection(false);
                setLng2(e.lngLat.lng);
                setLat2(e.lngLat.lat);
                // console.log(2)
            }
            else {
                // нам всё равно что тут происходит
                // console.log(3)
            }

        });

    });


    return (
        <Box>
            {/*<Header/>*/}
            {/* topbar */}
            <Grid container direction={"row"} className={classes.topbar}>

                <Grid item xs={6} direction={"row"} justify={"space-between"} style={{position: "relative"}}>
                    <Avatar src={test_img}/>
                    <img src={PhoneSvg} style={{position: "absolute", top: 7, left: 50}}/>
                    <img src={MsgSvg} style={{position: "absolute", top: 7, left: 90, color: "#294367"}}/>
                </Grid>

                <Grid item derection={"column"} xs={6}>
                    <Typography align="left"
                                style={{
                                    fontSize: "9px",
                                    lineHeight: "11px"
                                }}>
                        машина: Lada ведро
                    </Typography>
                    <Typography align="left"
                                style={{
                                    fontSize: "9px",
                                    lineHeight: "11px"
                                }}>
                        номер: x220вт
                    </Typography>
                    <Typography align="left"
                                style={{
                                    fontSize: "9px",
                                    lineHeight: "11px"
                                }}>
                        цвет авто: белый
                    </Typography>
                    <Typography align="left"
                                style={{
                                    fontSize: "9px",
                                    lineHeight: "11px"
                                }}>
                        водитель: Генадий Горин
                    </Typography>
                </Grid>
            </Grid>

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

                {/*<input placeholder={"from"}*/}
                {/*       className={classes.input}*/}
                {/*       onClick={e => {*/}
                {/*            // todo: тут стейт не обновляется, что очень странно :/ . Попробовать приебашить это redux'ом*/}
                {/*            setCurrectSelection("from");*/}
                {/*            console.log(currectSelection);*/}
                {/*        }}*/}
                {/*       style={{*/}
                {/*           marginBottom: 13*/}
                {/*       }}/>*/}

                {/*<input placeholder={"to"}*/}
                {/*       className={classes.input}*/}
                {/*       onClick={e => setCurrectSelection("to")}/>*/}
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

                    <Grid item style={{
                        background: "#294367",
                        borderRadius: 50,
                        color: "white",
                        padding: "7px 20px",
                        width: 200,
                        margin: "20px auto"
                    }}>
                        отменить поездку
                    </Grid>

                </Grid>
            </Grid>
            <div ref={mapContainer} className={classes.map}  />
        </Box>
    );
}