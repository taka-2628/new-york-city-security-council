import NavBar from "./NavBar";
import CloseBtn from "./buttons/CloseBtn";

function MyPage(){
  
  
  return(
    <div id="my-page" className="grid-container">
      <NavBar />
      <CloseBtn />

      <div>
        <h1>My Profile</h1>
        
      </div>
    </div>
  )
}

export default MyPage;