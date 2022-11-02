import { useState } from "react";
import '../../stylesheets/Contribute.css';

import Geolocate from "./Geolocate";
import Address from "./Address";

function GeolocateAddress({ coordinates, setCoordinates, formData, handleChange, onStepChange }){
  const [ isGeolocate, setIsGeolocate ] = useState(true);

  function handleSwitch(){
    setIsGeolocate(!isGeolocate);
  }

  return(
    
    <>
      {
        isGeolocate ?
        <Geolocate coordinates={coordinates} setCoordinates={setCoordinates} handleSwitch={handleSwitch} onStepChange={onStepChange}/> :
        <Address formData={formData} handleChange={handleChange} handleSwitch={handleSwitch} onStepChange={onStepChange}/>
      }
    </>
    
  )
}

export default GeolocateAddress;