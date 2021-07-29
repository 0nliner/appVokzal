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
import '../MapSearchPage/mapSearch.css'

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
mapboxgl.accessToken = "pk.eyJ1IjoibjBubGluZXIiLCJhIjoiY2txNmNmN3BvMWJ1NzJwb2M1czc3ZWZ6NSJ9.860SgUxyGaAWIGja2sOugw";


let useMapStyles = makeStyles(theme => ({
    map: {
        height: "100vh"
    },
    nav: {
        width: 50,
        position: "fixed",
        top: 10,
        left: 12,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        borderRadius: 5
    },
    navBar: {
      position: "relative"
    },
    topbar: {
        position: "absolute",
        width: 80,
        top: 100,
        right: 10
    }

}));


export function MapSearchPage (props) {
    let classes = useMapStyles();

    const mapContainer = useRef(null);
    const mapNav = useRef(null);
    const map = useRef(null);

    // TODO:
    //   нам приходят названия городов
    //   мы при помощи сторонней API находим координаты места
    //   размечаем маршрут и добавляем его в mapbox

    const breakpoints_data = [];

    let [currectSelection, setCurrectSelection] = useState(false);

    // стандартная позиция на карте
    const [defaultLng, setLng] = useState(-70.9);
    const [defaultLat, setLat] = useState(42.35);

    const [zoom, setZoom] = useState(12);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [defaultLng, defaultLat],
            zoom: zoom
        });
        map.current.addControl(new mapboxgl.NavigationControl());
        map.current.addControl(
          new mapboxgl.GeolocateControl({
              positionOptions: {
                  enableHighAccuracy: true
              },
              trackUserLocation: true
          })
      );

      map.current.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
    map.current.on('idle',function(){
      map.current.resize()
      })
    });
    
 

    return (
        <Box>
            <div ref={mapContainer} className={classes.map}>

            </div>

            <div className={classes.nav}>
                <Nav />
              </div>
        
        </Box>
    );
}