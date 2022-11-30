import { useState, useRef } from "react";
import { createRoot } from 'react-dom/client';
import {render} from 'react-dom';
import Map, { Source, Layer, useMap, Marker, Popup, GeolocateControl} from 'react-map-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import '../stylesheets/Map.css';

//import linkNYC from '../data/link_nyc.geojson';

import NavFullscreen from "./NavFullscreen";
import ControlPanel from "./map-components/ControlPanel";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;
console.log(process.env);

function MapContainer( { cameras } ){
  const mapRef = useRef();

  const settings = {
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
    minZoom: 11,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85
  }

  console.log(cameras);
  
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };
  
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };

  const onMapLoadedHandler = () => {
    console.log("mapRef:");
    console.log(typeof mapRef.current.setLayoutProperty === "function");

    console.log("getMap()");
    console.log(
      typeof mapRef.current.getMap().setLayoutProperty === "function"
    );
  };

  return(
    <div id="map-container">
      <NavFullscreen />
      <ControlPanel />
      <Map 
        initialViewState={{
          longitude: -73.85,
          latitude: 40.66,
          zoom: 11,
          pitch: 50
        }}
        {...settings}
        ref={mapRef}
        onLoad={onMapLoadedHandler}
        mapStyle="mapbox://styles/th-th/cla9v6h47000014jxvv2ebgge"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  )
}

export default MapContainer;