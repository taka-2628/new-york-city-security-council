import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginSignup(){
  return(
    <div id="login-signup" className="width-60">
      <h1>Signin/Signup</h1>
      <NavBar />
      <LoginForm />
      <SignupForm />
    </div>
  )
}

export default LoginSignup;