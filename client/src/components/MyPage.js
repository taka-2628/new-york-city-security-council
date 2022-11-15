import { useState, useContext } from "react";
import '../stylesheets/MyPage.css';

import { UserContext } from '../context/user';

import NavBar from "./NavBar";
import CloseBtn from "./buttons/CloseBtn";

function MyPage(){
  const { user } = useContext(UserContext);

  const [userData, setUserData] = useState(user);
  console.log(userData);
  
  
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
                if (key !== "social_media_platforms" && key !== "id"){
                  return (
                    <div key={index}>
                      <label>{key.replace(/_+/g, ' ')}</label>
                      <input value={ userData[key] }></input>
                    </div>
                  );
                } else {
                  console.log(userData[key])
                }
                
              }) 
            }
          </form>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default MyPage;