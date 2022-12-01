import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from '../context/user';

import CloseBtn from "./buttons/CloseBtn";
import ReturnBtn from "./buttons/ReturnBtn";
import GeolocateAddress from "./submit-forms/GeolocateAddress";
import Image from "./submit-forms/Image";
import Type from "./submit-forms/Type";
import Other from "./submit-forms/Other";
import Submit from "./submit-forms/Submit";

function Contribute(){
  const { user } = useContext(UserContext);
  const [step, setStep] = useState(0);

  function onStepChange(){
    setStep(step + 1)
  }

  const [coordinates, setCoordinates] = useState(null);
  const [formData, setFormData] = useState(
    {
      address: "",
      intersection: "",
      zipcode: "",
      borough: "",
      image_url: "",
      description: "",
    }
  );
  
  function handleChange(key, value){
    setFormData({
      ...formData, 
      [key]: value,
    })
  }

  const [typeCheckedState, setTypeCheckedState] = useState( [true, false, false] );
  const [onwerCheckedState, setOwnerCheckedState] = useState( [true, false, false] );

  function handleOnChangeType(position){
    const clickedState = typeCheckedState[position];

    const updatedCheckedState = clickedState ? typeCheckedState : typeCheckedState.map((item, index) => index === position ? !item : false);
    
    console.log(updatedCheckedState);
    setTypeCheckedState(updatedCheckedState);
  };

  function handleOnChangeOwner(position){
    const clickedState = onwerCheckedState[position];

    const updatedCheckedState = clickedState ? onwerCheckedState : onwerCheckedState.map((item, index) => index === position ? !item : false);
    
    console.log(updatedCheckedState);
    setOwnerCheckedState(updatedCheckedState);
  };

  function handleSubmit(){
    let typeSelected;
    if (typeCheckedState[0]){
      typeSelected = "Dome";
    } else if (typeCheckedState[1]){
      typeSelected = "Bullet";
    } else if (typeCheckedState[2]){
      typeSelected = "Other";
    }

    let ownerSelected;
    if (onwerCheckedState[0]){
      ownerSelected = "NYPD";
    } else if (onwerCheckedState[1]){
      ownerSelected = "Private Owner";
    } else if (onwerCheckedState[2]){
      ownerSelected = "Other";
    }

    const data = { ...formData, latitude: coordinates[1], longitude: coordinates[0], camera_type: typeSelected, owner: ownerSelected}
    console.log(data);
    
    /*
    fetch("/cameras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((r) => {
      if (r.ok) {
        r.json().then((project) => {
          setProjects([...projects, project])
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    */
  }

  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return <GeolocateAddress coordinates={coordinates} setCoordinates={setCoordinates} formData={formData} handleChange={handleChange} onStepChange={onStepChange}/>;
      case 1:
        return <Image handleChange={handleChange} onStepChange={onStepChange} />;
      case 2:
        return <Type typeCheckedState={typeCheckedState} handleOnChangeType={handleOnChangeType} onStepChange={onStepChange} />;
      case 3:
        return <Other onwerCheckedState={onwerCheckedState} handleOnChangeOwner={handleOnChangeOwner} formData={formData} handleChange={handleChange} onStepChange={onStepChange} />;
      case 4: 
        return <Submit handleSubmit={handleSubmit} />
      default: 
        return <GeolocateAddress coordinates={coordinates} setCoordinates={setCoordinates} formData={formData} handleChange={handleChange} onStepChange={onStepChange}/>;
    }
  }

  const navigateToLogin = () => {
    return (
      <div id="login-redirect" className="four-ten">
        <p>Please Login Before Submitting Camera</p>
        <NavLink to="/signin" exact="true">Go to login page</NavLink>
      </div>
    )
  }

  return(
    <div id="contribute" className="grid-container">
      <CloseBtn />
      <ReturnBtn />

      { user ? conditionalComponent() : navigateToLogin() }
    </div>
  )
}

export default Contribute;