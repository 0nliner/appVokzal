import {Box, Grid, makeStyles} from "@material-ui/core";
import {Header} from "../components/Header";
import { Nav } from '../components/Nav';
import mapboxgl from 'mapbox-gl';
import {useEffect, useRef, useState} from "react"; // eslint-disable-line import/no-webpack-loader-syntax


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
        // height: "100vh",
    },
    nav: {
        width: 80,
        position: "absolute",
        top: 10
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



    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [defaultLng, defaultLat],
            zoom: zoom
        });

        map.current.on('click', function(e) {
            console.log(currectSelection)
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
                console.log(2)
            }
            else {
                // нам всё равно что тут происходит
                console.log(3)
            }

        });

    });


    return (
        <Box>
            <Header/>

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

                <input placeholder={"from"}
                       className={classes.input}
                       onClick={e => {
                            // todo: тут стейт не обновляется, что очень странно :/ . Попробовать приебашить это redux'ом
                            setCurrectSelection("from");
                            console.log(currectSelection);
                        }}
                       style={{
                           marginBottom: 13
                       }}/>

                <input placeholder={"to"}
                       className={classes.input}
                       onClick={e => setCurrectSelection("to")}/>
            </Grid>

            {/* map */}
{/*<<<<<<< HEAD*/}
{/*/!*=======*!/*/}
{/*/!*            <div className={classes.nav}>*!/*/}
{/*/!*                <Nav />*!/*/}
{/*/!*            </div>*!/*/}
{/*/!*>>>>>>> 39b450019d14f1b6cf5937608ced8185b4b746c9*!/*/}
{/*            <div ref={mapContainer} className={classes.map}/>*/}
{/*=======*/}
            <div className={classes.nav}>
                <Nav />
                
            </div>
            <div ref={mapContainer} className={classes.map}  />
{/*>>>>>>> 2d9903a91c3f88c2c373df0b24de05e48055b6b8*/}
        </Box>
    );
}