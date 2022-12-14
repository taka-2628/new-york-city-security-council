import { useState } from "react";

import LoginForm from "./login-signup-forms/LoginForm";
import SignupForm from "./login-signup-forms/SignupForm";
import CloseBtn from "./buttons/CloseBtn";
import ReturnBtn from "./buttons/ReturnBtn";

function LoginSignup({ neighborhoods, socialMedia }){
  const [ isLogin, setIsLogin ] = useState(true);
  
  function handleSwitch(){
    console.log('login')
    setIsLogin(!isLogin);
  }
  
  return(
    <div id="login-signup" className="grid-container">
      <CloseBtn />
      <ReturnBtn />
      { isLogin ? <LoginForm handleSwitch={handleSwitch}/> : <SignupForm handleSwitch={handleSwitch} neighborhoods={neighborhoods} socialMedia={socialMedia}/> }
    </div>
  )
}

export default LoginSignup;