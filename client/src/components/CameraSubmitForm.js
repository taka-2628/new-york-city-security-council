import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CameraSubmitForm( { /*currentUser*/ } ){
  const [title, setTitle] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [coordiError, setCoordiError] = useState(null);

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveLocation);
    } else { 
      setCoordiError("Geolocation is not supported by this browser.");
    }
  }

  function saveLocation(position) {
    let coordinates = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }
    console.log(coordinates)
    setCoordinates(coordinates);
    setCoordiError(null);
  }

  function handleSubmit(e){
    e.preventDefault();  
    setErrors([]);

    /*
    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        title,
        description,
        image,
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

  return (
    <div id="submit-camera" className="four-ten">
      <h1>Submit Surveillance Camera</h1>

      <form onSubmit={handleSubmit}>
        <div className="half-width div-left">
          <label htmlFor="p-title">Title</label>
          <input 
            type="text" 
            id="p-title" 
            name="title"
            value={title}
            placeholder="Title of your project.." 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <button onClick={() => getLocation()}>Get Your Geolocation</button>
          { 
            coordinates ? 
            <div>
              <span>Latitude: {coordinates.latitude}</span>
              <span>Longitude: {coordinates.longitude}</span>
            </div> : 
            null
          }
          { coordiError ? <span>{coordiError}</span> : null}
        </div>
        
        <div className="half-width div-right">
          <label htmlFor="p-image">Image</label>
          <input 
            type="text" 
            id="p-image" 
            name="image"
            value={image}
            placeholder="URL for an image.."
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <label htmlFor="p-desc">Camera Description</label>
        <textarea 
          id="c-desc" 
          name="description"
          value={description}
          placeholder="Describe the surveillance camera.."
          onChange={(e) => setDescription(e.target.value)}
        >
        </textarea>

        <input type="submit" value="Submit"/>
      </form>
      <div className="error-div">
        {errors.map((err) => (
            <p key={err} >{err}</p>
        ))}
      </div>
    </div>
  )
}

export default CameraSubmitForm;