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

function Community( {users} ){

  const userList = users.map((user) => {
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
    
    return (
      <div key={user.id} className='user-cont'>
        <p><span>user:</span><strong>{user.username}</strong><span>neighborhood:</span><strong>{user.neighborhood.neighborhood}</strong></p>
        <p><span>contributions:</span><span><strong>{user.cameras.length}</strong>cameras uploaded</span><br/></p>
        <span>social media:</span>{ user.social_media_platforms ? user.social_media_platforms.map((sns) => <span key={sns.id}>{sns.social_media}</span>) : null }
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
          {userList}
        </div>
      </div>
    </div>
  )
}

export default Community;