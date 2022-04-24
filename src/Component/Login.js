import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";
import Spinners from "./Spinners";


const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const location=useLocation()
    const from=location?.state?.from?.pathname||'/'

    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, GgUser, GgLoading, GgError] =
        useSignInWithGoogle(auth);

        const [signInWithGithub, GhUser, GhLoading, GhError] =
          useSignInWithGithub(auth);

          const [signInWithFacebook, FBUser, FBLoading, FBError] =
            useSignInWithFacebook(auth);

   const [sendPasswordResetEmail, sending,  ResetPassError] =
     useSendPasswordResetEmail(auth);

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
       await signInWithEmailAndPassword(email,password)
    } 

    const handleGoogleSignIn=async()=>{
     await signInWithGoogle();
    }

    const handleGithubSignIn=async()=>{
     await signInWithGithub()
    }

    const handleFacebookSignIn= async()=>{
     await signInWithFacebook()
    }
   
    const handleResetPassword=()=>{
      sendPasswordResetEmail(email)
      toast('sent email')
    }
    
    

    if (user || FBUser || GhUser || GgUser) {
      navigate(from, { replace: true });
    }

  return (
    <div className="w-1/3 mx-auto border-2 my-5 p-10 rounded-xl">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">Please Login...</h1>
        <div className="my-3">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            onBlur={handleEmail}
            className="border w-full"
            type="email"
            name="email"
            id=""
          />
        </div>
        <div className="my-3">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            onBlur={handlePassword}
            className="border w-full"
            type="password"
            name="password"
            id=""
          />
        </div>

        {(loading || FBLoading || GhLoading || GgLoading || sending) && (
          <p>
            <Spinners />
          </p>
        )}

        {(error || FBError || GhError || GgError) && (
          <p className="text-red-600">
            Error: {error?.message} {GgError?.message} {FBError?.message}
            {GhError?.message}
          </p>
        )}

        <div className="flex justify-center">
          <input
            className="bg-blue-600 text-xl font-bold px-5 py-2 text-white rounded-xl mt-2"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <p>
        First time on the car doctor?
        <Link className="text-orange-600" to="/register">
          Create account
        </Link>
      </p>
      <p className="mt-2">
        forget password?
        <span
          onClick={handleResetPassword}
          className="text-blue-600 cursor-pointer"
        >
          reset password
        </span>
      </p>
      <div className="flex items-center">
        <div className="bg-gray-500 h-[1px] w-full"></div>
        <p className="text-center mx-4 ">Or</p>
        <div className="bg-gray-500 h-[1px] w-full"></div>
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="border-2 rounded-xl w-full text-xl py-2"
      >
        Login with google
      </button>
      <button
        onClick={handleGithubSignIn}
        className="border-2 rounded-xl w-full text-xl py-2 mt-2"
      >
        Login with gitHub
      </button>
      <button
        onClick={handleFacebookSignIn}
        className="border-2 rounded-xl w-full text-xl py-2 mt-2"
      >
        Login with Facebook
      </button>
      
    </div>
  );
};

export default Login;
