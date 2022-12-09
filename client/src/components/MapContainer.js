import { useState, useRef } from "react";
import { createRoot } from 'react-dom/client';
import {render} from 'react-dom';
import Map, { Source, Layer, useMap, Marker, Popup, GeolocateControl} from 'react-map-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import '../stylesheets/Map.css';

//import linkNYC from '../data/link_nyc.geojson';

import NavFullscreen from "./NavFullscreen";
import Pin from "./map-components/Pin";
import SidePanel from "./map-components/SidePanel";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;
console.log(process.env);

function MapContainer( { cameras, setCameras } ){
  const mapRef = useRef();
  const [ cameraSelected, setCameraSelected] = useState(null);
  const [ isSidePanelOpen, setIsSidePanelOpen ] = useState(false);

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

  const pins = cameras.map((camera, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={camera.longitude}
      latitude={camera.latitude}
      anchor="bottom"
      onClick={e => {
        // If we let the click event propagates to the map, it will immediately close the popup
        // with `closeOnClick: true`
        e.originalEvent.stopPropagation();
        setCameraSelected(camera);
      }}
    >
      <Pin />
    </Marker>
  ))
  /*
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
  */

  const onMapLoadedHandler = () => {
    console.log("mapRef:");
    console.log(typeof mapRef.current.setLayoutProperty === "function");

    console.log("getMap()");
    console.log(
      typeof mapRef.current.getMap().setLayoutProperty === "function"
    );
  };

  function toggleSidebar(){
    isSidePanelOpen === true ? setIsSidePanelOpen(false) : setIsSidePanelOpen(true);
  }

  return(
    <div id="map-container">
      <NavFullscreen />
      <SidePanel isSidePanelOpen={isSidePanelOpen} cameraSelected={cameraSelected} toggleSidebar={toggleSidebar} cameras={cameras} setCameras={setCameras}/>
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

        { pins }

        {
          cameraSelected 
          ? <Popup
              anchor="top"
              longitude={Number(cameraSelected.longitude)}
              latitude={Number(cameraSelected.latitude)}
              onClose={() => setCameraSelected(null)}
            > 
              <img width="100%" src={cameraSelected.image_url} />
              <div>
              { cameraSelected.user.username ? <><span>Uploaded by: {cameraSelected.user.username}</span><br/></> : null }
              { cameraSelected.latitude && cameraSelected.longitude ? <><span>Coordinates: ({cameraSelected.latitude}, {cameraSelected.longitude})</span><br/></> : null }
              <button id="open-detail-btn" onClick={toggleSidebar}>Open in Detail View</button>
              </div>
            </Popup> 
          : null
        }

        {
        /*<Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
        */
        }
      </Map>
    </div>
  )
}

export default MapContainer;