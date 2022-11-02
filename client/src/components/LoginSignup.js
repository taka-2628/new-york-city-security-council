import { useState } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import CloseBtn from "./buttons/CloseBtn";
import ReturnBtn from "./buttons/ReturnBtn";

function LoginSignup(){
  const [ isLogin, setIsLogin ] = useState(true);
  function handleSwitch(){
    console.log('login')
    setIsLogin(!isLogin);
  }
  
  return(
    <div id="login-signup" className="width-60">
      <h1>Signin/Signup</h1>
      <CloseBtn />
      <ReturnBtn />
      
      { isLogin ? <LoginForm handleSwitch={handleSwitch}/> : <SignupForm handleSwitch={handleSwitch}/> }
    </div>
  )
}

export default LoginSignup;