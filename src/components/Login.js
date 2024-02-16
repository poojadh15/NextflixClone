import { useRef, useState } from "react";
import Header from "./Header";
import {Validate} from "../Assets/Validate";

const Login = () => {
    const [toggleSignUp,settoggleSignUp]= useState(true)
    const toggleBtn = () => {
        //toggleSignUp == "Sign In" ? settoggleSignUp("Sign Up") : settoggleSignUp("Sign In");
        settoggleSignUp(!toggleSignUp)
    }
    const email = useRef(null);
    const password = useRef(null);
    const submitClick = ()=>{
        const message = Validate(email.current.value,password.current.value);
    }
    return <>
        <Header />
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="browseimage" />
        <form onSubmit={(e)=>{e.preventDefault()}} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 font-white text-white bg-opacity-60">
            {
                 <h1 className="text-xl">{toggleSignUp ? "Sign In" : "Sign Up"}</h1>
            }
  
            <input ref={email} type="text" placeholder="Enter Email" className="p-2 m-2 w-full text-black" />
            <input ref={password} type="password" placeholder="Enter password" className="p-2 m-2 w-full text-black" />
            <button className="p-2 m-2 bg-red-700 w-full rounded-l" onClick={submitClick}>{toggleSignUp ? "Sign In" : "Sign Up"}</button>
            {
                !toggleSignUp ? <p>Already have an account? <a className="cursor-pointer underline" onClick={toggleBtn}>Sign In</a></p> :
                <p>New to Netflix? <a className="cursor-pointer underline" onClick={toggleBtn}>Sign up </a>now,</p>
            }
            

        </form>
    </>
}
export default Login;