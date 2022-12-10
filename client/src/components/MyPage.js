import { useState, useContext } from "react";
import '../stylesheets/MyPage.css';

import { UserContext } from '../context/user';

import NavBar from "./NavBar";
import CloseBtn from "./buttons/CloseBtn";

function MyPage(){
  const { user } = useContext(UserContext);

  const [userData, setUserData] = useState(user);  
  console.log(userData)
  
  return(
    <div id="my-page" className="grid-container">
      <NavBar />
      <CloseBtn />

      <div className="five-nine scrollable-wrapper">
        <div id="profile-cont">
          <h3>My Profile</h3>
          <form>
            { 
              Object.keys(userData).map((key, index) => {
                if (key !== "social_media_platforms" && key !== "id" && key !== "cameras" && key !== "neighborhood"){
                  return (
                    <div key={index}>
                      <label>{key.replace(/_+/g, ' ')}</label>
                      <input value={userData[key]}></input>
                    </div>
                  );
                } else if(key === "neighborhood") {
                  return (
                    <div key={index}>
                      <label>{key.replace(/_+/g, ' ')}</label>
                      <input value={userData[key]["neighborhood"]}></input>
                    </div>
                  );
                }
              }) 
            }
          </form>
        </div>
        <hr/>
        <div id="my-cameras">
          <h3>My Cameras</h3>
          {
            userData.cameras.map((camera) => {
              const date = camera ? new Date(camera.created_at) : null // formated_Date - SDK returned date
              const formatedDate = camera ? (`${date.getFullYear()}-${date.getMonth() +1 }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`) : null;
              return(
                <div key={camera.id} className="camera-card">
                  <img src={camera.image_url}></img>
                  <div className="text-wrapper">
                  <h4>Camera Info</h4>
                  <div className="cam-info-text-group">
                    <><span>{formatedDate}</span><br/></>
                  </div>
                  <hr/>
                  <div className="cam-info-text-group">
                    { camera.latitude && camera.longitude ? <><span>Lat: {camera.latitude}, Long: {camera.longitude}</span><br/></> : null}
                    { camera.address ? <><span>Address: {camera.address}</span><br/></> : null }
                    { camera.intersection ? <><span>Intersection: {camera.intersection}</span><br/></> : null }
                    { camera.zipcode ? <><span>Zipcode: {camera.zipcode}</span><br/></> : null }
                  </div>
                  <hr/>
                  <div className="cam-info-text-group">
                    <span>Type: {camera.camera_type}</span><br/>
                    <span>Owner: {camera.owner}</span><br/>
                  </div>
                  <hr/>
                  <div className="cam-info-text-group">
                    <span>Description: </span>
                    <p>{camera.description}</p>
                  </div>
                </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MyPage;