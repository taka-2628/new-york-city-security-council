import '../stylesheets/Community.css';

import NavBar from "./NavBar";
import CloseBtn from "./buttons/CloseBtn";

function Community( {users} ){

  const userList = users.map((user) => {
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