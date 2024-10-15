import React from "react";
import { FcGoogle } from "react-icons/fc";

// app is used to acccess initialized app
import { app } from "../config/firebase.config";      
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

//useNavigate is used to navigate after successful navigation.
import { useNavigate } from "react-router-dom";

function Login() {
  const firebaseAuth = getAuth(app);            //initializes Firebase authentication for app instance
  const provider = new GoogleAuthProvider();    //setting google as auth. provider
  const navigate = useNavigate();               
  //on successfull login we have to navigate user to "home" page , thats why we are using it here

  //"userCred" conatains details of user logged in after he log-in.
  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      console.log(userCred)
    });
  };
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
        <div className="w-full md:w-375 p-4 bg-lightOverlay shdow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay hover:bg-card hover:shadow-md duration-100 ease-inout transition-all cursor-pointer"
            onClick={loginWithGoogle}
          >
            <FcGoogle className="text-2xl" />
            Sign in with google
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
