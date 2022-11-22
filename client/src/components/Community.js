import { useState } from "react";
import '../stylesheets/Community.css';

import NavBar from "./NavBar";
import CloseBtn from "./buttons/CloseBtn";

import logoFacebook from "../assets/sns-Facebook.png";
import logoInstagram from "../assets/sns-Instagram.png";
import logoTwitter from "../assets/sns-Twitter.png";
import logoTikTok from "../assets/sns-TikTok.png";
import logoSnapchat from "../assets/sns-Snapchat.png";
import logoPinterest from "../assets/sns-Pinterest.png";
import logoLinkedIn from "../assets/sns-LinkedIn.png";
import logoBeReal from "../assets/sns-BeReal.png";

function Community( { users, socialMedia } ){
  const logos = {
    Facebook: logoFacebook,
    Instagram: logoInstagram,
    Twitter: logoTwitter,
    TikTok: logoTikTok,
    Snapchat: logoSnapchat,
    Pinterest: logoPinterest,
    LinkedIn: logoLinkedIn,
    BeReal: logoBeReal
  }

  //const [filteredUsers, setFilteredUsers] = useState(users);
  const [socialMediaCheckedState, setSocialMediaCheckedState] = useState( new Array(8).fill(false) );

  function handleFilterChange(position){
    const updatedCheckedState = socialMediaCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    console.log(updatedCheckedState);
    setSocialMediaCheckedState(updatedCheckedState);
  }
  
  const socialMediaFilter = socialMedia.map((sm, index) => {
    return (
      <img 
        key={index} 
        src={logos[sm.social_media]} 
        className={socialMediaCheckedState[index] ? "selected" : null} 
        onClick={() => handleFilterChange(index)}>
      </img>
    )
  })

  const selectedSMIndexes = socialMediaCheckedState.map((sm, index) => {
    if(sm){return index + 1}
  }).filter(element => element >= 0);

  const filteredUsers = users.filter((user)=> {
    const smIndexes = user.social_media_platforms.map((sm) => {
      return sm.id;
    });
    return selectedSMIndexes.every(v => smIndexes.includes(v));
  })

  const userList = filteredUsers.map((user) => {
    console.log(user)
    return (
      <div key={user.id} className='user-cont'>
        <p><span>user:</span><strong>{user.username}</strong><span>neighborhood:</span><strong>{user.neighborhood.neighborhood}</strong></p>
        <p><span>contributions:</span><span><strong>{user.cameras.length}</strong>cameras uploaded</span><br/></p>
        {
            user.social_media_platforms.length !== 0 ? 
            <div className="sns-cont">
              <span>social media:</span>
              {user.social_media_platforms.map((sns) => <div key={sns.id}><img src={logos[sns.social_media]}></img></div>)}
            </div> :
            null
          }
      </div>
    )
  })

  return(
    <div id="community" className="grid-container">
      <NavBar />
      <CloseBtn />
      
      <div className="five-nine scrollable-wrapper">
        <div id="user-list-cont">
          <h3>Community</h3>
          <div id="filter-cont">
            {socialMediaFilter}
          </div>
          {userList}
        </div>
      </div>
    </div>
  )
}

export default Community;