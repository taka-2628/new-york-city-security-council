import { useState } from "react";

import CloseBtn from "./buttons/CloseBtn";
import ReturnBtn from "./buttons/ReturnBtn";
import GeolocateAddress from "./submit-forms/GeolocateAddress";
import Image from "./submit-forms/Image";
import Type from "./submit-forms/Type";
import Other from "./submit-forms/Other";

function Contribute(){
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
    const data = { ...formData, geometry: coordinates}
    console.log(data);
    
    /*
    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        title,
        subtitle,
        description,
        image,
        url,
        github_url: github,
        genres: selectedGenres,
        technologies: selectedTechs
      }),
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
      default: 
        return <GeolocateAddress coordinates={coordinates} setCoordinates={setCoordinates} formData={formData} handleChange={handleChange} onStepChange={onStepChange}/>;
    }
  }

  return(
    <div id="contribute" className="grid-container">
      <CloseBtn />
      <ReturnBtn />

      {conditionalComponent()}
    </div>
  )
}

export default Contribute;