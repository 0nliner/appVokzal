import {Box, makeStyles} from "@material-ui/core";
import {Header} from "../components/Header";

import mapboxgl from 'mapbox-gl';
import {useEffect, useRef, useState} from "react"; // eslint-disable-line import/no-webpack-loader-syntax


mapboxgl.accessToken = "pk.eyJ1IjoibjBubGluZXIiLCJhIjoiY2txNmNmN3BvMWJ1NzJwb2M1czc3ZWZ6NSJ9.860SgUxyGaAWIGja2sOugw";


let useMapStyles = makeStyles(theme => ({
    map: {
        height: "100vh"
    }
}));

export function MapPage (props) {
    let classes = useMapStyles();

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <Box>
            <Header/>
            <div ref={mapContainer} className={classes.map}  />
        </Box>
    );
}